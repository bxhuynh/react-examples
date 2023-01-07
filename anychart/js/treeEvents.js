anychart.onDocumentReady(function () {
  var data = [
    {
      id: '1',
      name: 'Development',
      actualStart: '2018-01-15',
      actualEnd: '2018-03-10',
      children: [
        {
          id: '1_1',
          name: 'Analysis',
          actualStart: '2018-01-15',
          actualEnd: '2018-01-25',
        },
        {
          id: '1_2',
          name: 'Design',
          actualStart: '2018-01-20',
          actualEnd: '2018-02-04',
        },
        {
          id: '1_3',
          name: 'Meeting',
          actualStart: '2018-02-05',
          actualEnd: '2018-02-05',
        },
        {
          id: '1_4',
          name: 'Implementation',
          actualStart: '2018-02-05',
          actualEnd: '2018-02-24',
        },
        {
          id: '1_5',
          name: 'Testing',
          actualStart: '2018-02-25',
          actualEnd: '2018-03-10',
        },
      ],
    },
  ];

  // create a data tree
  var treeData = anychart.data.tree(data, 'as-tree');

  // create a chart
  var chart = anychart.ganttProject();

  // set the data
  chart.data(treeData);

  // configure the scale
  chart.getTimeline().scale().maximum('2018-03-15');

  // allow editing the chart
  chart.edit(true);

  // set the chart title
  chart.title().useHtml(true);
  chart.title('Events: Tree Data<br><br>');
  chart.title().padding(10);

  /* listen to the treeItemUpdate event and update the chart title */
  treeData.listen('treeItemUpdate', function (e) {
    console.log(e);
    var itemName = e.item.get('name');
    chart.title(
      'Events: Tree Data<br><br>< ' +
        "<span style = 'color:#990000'>" +
        itemName +
        ': </span> treeItemUpdate >'
    );
  });

  /* listen to the treeItemMove event and update the chart title */
  treeData.listen('treeItemMove', function (e) {
    console.log(e);
    var itemName = e.item.get('name');
    chart.title(
      'Events: Tree Data<br><br>< ' +
        "<span style = 'color:#990000'>" +
        itemName +
        '</span>: treeItemMove >'
    );
  });

  treeData.listen('treeItemRemove', function (e) {
    console.log(e);
  });

  treeData.listen('treeItemCreate', function (e) {
    console.log(e);
  });

  // set the container id
  chart.container('container');

  // initiate drawing the chart
  chart.draw();

  // fit elements to the width of the timeline
  chart.fitAll();
});
