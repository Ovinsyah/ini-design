import React, { useState } from 'react';

interface DefaultModel extends React.InputHTMLAttributes<HTMLInputElement> {
  filled?: boolean;
  full?: boolean;
  error?: string;
  label?: string;
}

export default ({ filled, full, error, label, ...props }: DefaultModel) => {
  const [isShow, setIsShow] = useState(false);
  const Label = () => <span className="ini-input-label">{label}</span>;
  if (props.type === "password"){
    return(
      <React.Fragment>
        <Label />
        <div className={"ini-section-input-password" + (full ? " ini-w-100" : "")}>
          <input
          {...props}
          type={isShow ? "text" : "password"}
          className={
            "ini-input" +
            (filled ? " ini-input-filled" : "") +
            (full ? " ini-w-100" : "") +
            (error ? " ini-input-error" : "")
          }/>
          {error && <span className="ini-message-error">{error}</span>}
          {isShow ? <i onClick={() => setIsShow(false)} className="ini-icon ic-eye">&#xe83e;</i> : <i onClick={() => setIsShow(true)} className="ini-icon ic-eye">&#xe83f;</i>}
        </div>
      </React.Fragment>
    );
  }
  if (props.type === "search"){
    return(
      <React.Fragment>
        <Label />
        <div className={"ini-section-input-search" + (full ? " ini-w-100" : "")}>
          <input
          {...props}
          className={
            "ini-input" +
            (filled ? " ini-input-filled" : "") +
            (full ? " ini-w-100" : "") +
            (error ? " ini-input-error" : "")
          }/>
          {error && <span className="ini-message-error">{error}</span>}
          <i className="ini-icon ic-search">&#xe81a;</i>
        </div>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Label />
      <input
        {...props}
        className={
          "ini-input" +
          (filled ? " ini-input-filled" : "") +
          (full ? " ini-w-100" : "") +
          (error ? " ini-input-error" : "")
        }/>
        {error && <span className="ini-message-error">{error}</span>}
    </React.Fragment>
  );
};
