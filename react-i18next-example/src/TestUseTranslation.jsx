import React from "react";
import { withTranslation, useTranslation } from "react-i18next";

export function TestHook() {
  const { t } = useTranslation();
  return <p> {t("once said")}</p>;
}

class TestUseTranslation extends React.Component {
  handleClick = (lang) => {
    this.props.i18n.changeLanguage(lang);
  };

  render() {
    let { t } = this.props;
    return (
      <div className="container">
        <img alt="header" src="/header.png" className="img" />
        <p>{t("quote")}</p>
        <TestHook />
        <div className="button-container">
          <button
            onClick={() => {
              this.handleClick("en");
            }}
          >
            {t("english")}
          </button>
          <button
            onClick={() => {
              this.handleClick("vi");
            }}
          >
            {t("vietnamese")}
          </button>
          <button
            onClick={() => {
              this.handleClick("de");
            }}
          >
            {t("meowlish")}
          </button>
        </div>
      </div>
    );
  }
}
export default withTranslation()(TestUseTranslation);
