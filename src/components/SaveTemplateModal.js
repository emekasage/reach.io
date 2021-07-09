import React, { useContext } from "react";
import { providerFunctions } from "../provider/FunctionsProvider";

export default function SaveTemplateModal(props) {
  const { templateDetails, setTemplateDetails, createEngageTemplate } = useContext(providerFunctions);

  return (
    <div>
      <div className="card-header d-flex justify-content-between">
        <div className="list-title mt-1">
          <h6>Save Template</h6>
        </div>
      </div>
      <div className="my-2 mod-form">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Give your template a name
        </label>
        <input
          type="text"
          className="form-control form-control-lg mod-input"
          name="template_name"
          placeholder="E.g Awesome Campaign Template"
          onChange={(e) => {
            var ec = { ...templateDetails };
            ec.template_name = e.target.value;
            setTemplateDetails(ec);
          }}
          value={
            typeof templateDetails["template_name"] === "undefined"
              ? ""
              : templateDetails["template_name"]
          }
        />
      </div>
      <div className="my-3 mod-btn">
        <button
          onClick={() => {
            createEngageTemplate();
            // eslint-disable-next-line react/prop-types
            props.setShowModal(false);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}
