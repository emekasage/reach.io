import React, { useContext } from "react";
import { providerFunctions } from "../provider/FunctionsProvider";

export default function CreateSequenceModal(props) {
  const { setCreateListPage } = useContext(providerFunctions);
  return (
    <div className="sequence">
      <div className="seq-head">
        <h6>Create a Sequence</h6>
      </div>

      <div className="seqs">
        <div
          className="seq-1"
          onClick={() => {
            setCreateListPage(2.5);
            // eslint-disable-next-line react/prop-types
            props.setShowModal(false);
          }}
        >
          <span className="bi bi-file-earmark-plus"></span>
          <p>From Scratch</p>
        </div>
        <div className="seq-2">
          <span className="bi bi-file-earmark-text"></span>
          <p>From Template</p>
        </div>
      </div>
    </div>
  );
}
