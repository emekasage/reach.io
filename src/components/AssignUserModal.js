import React, { useState, useContext, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
import { providerFunctions } from "../provider/FunctionsProvider";

export default function AssignUserModal() {
  const {
    getLinkedlnUser,
    linkedlnUsers,
    assignUserToCampaign,
    assignUserMessage,
    sendRobotData,
    getRobotMessage,
    robotMessages,
    sendTwoFaCode,
    verifyMessage,
  } = useContext(providerFunctions);
  const [showOptions, setShowOptions] = useState(false);
  const [showSecOption, setShowSecOption] = useState(false);
  const [linkUser, setLinkUser] = useState([]);
  // const [value, setValue] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [countries, setCountries] = useState([]);
  const [show2fa, setShow2fa] = useState(false)
  // const options = useMemo(() => countryList().getData(), []);
  // const [pickedUserId] = useState(null);
  useEffect(() => {

    setCountries([ 
      {"name": "Afghanistan", "code": "AF"}, 
      {"name": "land Islands", "code": "AX"}, 
      {"name": "Albania", "code": "AL"}, 
      {"name": "Algeria", "code": "DZ"}, 
      {"name": "American Samoa", "code": "AS"}, 
      {"name": "AndorrA", "code": "AD"}, 
      {"name": "Angola", "code": "AO"}, 
      {"name": "Anguilla", "code": "AI"}, 
      {"name": "Antarctica", "code": "AQ"}, 
      {"name": "Antigua and Barbuda", "code": "AG"}, 
      {"name": "Argentina", "code": "AR"}, 
      {"name": "Armenia", "code": "AM"}, 
      {"name": "Aruba", "code": "AW"}, 
      {"name": "Australia", "code": "AU"}, 
      {"name": "Austria", "code": "AT"}, 
      {"name": "Azerbaijan", "code": "AZ"}, 
      {"name": "Bahamas", "code": "BS"}, 
      {"name": "Bahrain", "code": "BH"}, 
      {"name": "Bangladesh", "code": "BD"}, 
      {"name": "Barbados", "code": "BB"}, 
      {"name": "Belarus", "code": "BY"}, 
      {"name": "Belgium", "code": "BE"}, 
      {"name": "Belize", "code": "BZ"}, 
      {"name": "Benin", "code": "BJ"}, 
      {"name": "Bermuda", "code": "BM"}, 
      {"name": "Bhutan", "code": "BT"}, 
      {"name": "Bolivia", "code": "BO"}, 
      {"name": "Bosnia and Herzegovina", "code": "BA"}, 
      {"name": "Botswana", "code": "BW"}, 
      {"name": "Bouvet Island", "code": "BV"}, 
      {"name": "Brazil", "code": "BR"}, 
      {"name": "British Indian Ocean Territory", "code": "IO"}, 
      {"name": "Brunei Darussalam", "code": "BN"}, 
      {"name": "Bulgaria", "code": "BG"}, 
      {"name": "Burkina Faso", "code": "BF"}, 
      {"name": "Burundi", "code": "BI"}, 
      {"name": "Cambodia", "code": "KH"}, 
      {"name": "Cameroon", "code": "CM"}, 
      {"name": "Canada", "code": "CA"}, 
      {"name": "Cape Verde", "code": "CV"}, 
      {"name": "Cayman Islands", "code": "KY"}, 
      {"name": "Central African Republic", "code": "CF"}, 
      {"name": "Chad", "code": "TD"}, 
      {"name": "Chile", "code": "CL"}, 
      {"name": "China", "code": "CN"}, 
      {"name": "Christmas Island", "code": "CX"}, 
      {"name": "Cocos (Keeling) Islands", "code": "CC"}, 
      {"name": "Colombia", "code": "CO"}, 
      {"name": "Comoros", "code": "KM"}, 
      {"name": "Congo", "code": "CG"}, 
      {"name": "Congo, The Democratic Republic of the", "code": "CD"}, 
      {"name": "Cook Islands", "code": "CK"}, 
      {"name": "Costa Rica", "code": "CR"}, 
      {"name": "Cote D\"Ivoire", "code": "CI"}, 
      {"name": "Croatia", "code": "HR"}, 
      {"name": "Cuba", "code": "CU"}, 
      {"name": "Cyprus", "code": "CY"}, 
      {"name": "Czech Republic", "code": "CZ"}, 
      {"name": "Denmark", "code": "DK"}, 
      {"name": "Djibouti", "code": "DJ"}, 
      {"name": "Dominica", "code": "DM"}, 
      {"name": "Dominican Republic", "code": "DO"}, 
      {"name": "Ecuador", "code": "EC"}, 
      {"name": "Egypt", "code": "EG"}, 
      {"name": "El Salvador", "code": "SV"}, 
      {"name": "Equatorial Guinea", "code": "GQ"}, 
      {"name": "Eritrea", "code": "ER"}, 
      {"name": "Estonia", "code": "EE"}, 
      {"name": "Ethiopia", "code": "ET"}, 
      {"name": "Falkland Islands (Malvinas)", "code": "FK"}, 
      {"name": "Faroe Islands", "code": "FO"}, 
      {"name": "Fiji", "code": "FJ"}, 
      {"name": "Finland", "code": "FI"}, 
      {"name": "France", "code": "FR"}, 
      {"name": "French Guiana", "code": "GF"}, 
      {"name": "French Polynesia", "code": "PF"}, 
      {"name": "French Southern Territories", "code": "TF"}, 
      {"name": "Gabon", "code": "GA"}, 
      {"name": "Gambia", "code": "GM"}, 
      {"name": "Georgia", "code": "GE"}, 
      {"name": "Germany", "code": "DE"}, 
      {"name": "Ghana", "code": "GH"}, 
      {"name": "Gibraltar", "code": "GI"}, 
      {"name": "Greece", "code": "GR"}, 
      {"name": "Greenland", "code": "GL"}, 
      {"name": "Grenada", "code": "GD"}, 
      {"name": "Guadeloupe", "code": "GP"}, 
      {"name": "Guam", "code": "GU"}, 
      {"name": "Guatemala", "code": "GT"}, 
      {"name": "Guernsey", "code": "GG"}, 
      {"name": "Guinea", "code": "GN"}, 
      {"name": "Guinea-Bissau", "code": "GW"}, 
      {"name": "Guyana", "code": "GY"}, 
      {"name": "Haiti", "code": "HT"}, 
      {"name": "Heard Island and Mcdonald Islands", "code": "HM"}, 
      {"name": "Holy See (Vatican City State)", "code": "VA"}, 
      {"name": "Honduras", "code": "HN"}, 
      {"name": "Hong Kong", "code": "HK"}, 
      {"name": "Hungary", "code": "HU"}, 
      {"name": "Iceland", "code": "IS"}, 
      {"name": "India", "code": "IN"}, 
      {"name": "Indonesia", "code": "ID"}, 
      {"name": "Iran, Islamic Republic Of", "code": "IR"}, 
      {"name": "Iraq", "code": "IQ"}, 
      {"name": "Ireland", "code": "IE"}, 
      {"name": "Isle of Man", "code": "IM"}, 
      {"name": "Israel", "code": "IL"}, 
      {"name": "Italy", "code": "IT"}, 
      {"name": "Jamaica", "code": "JM"}, 
      {"name": "Japan", "code": "JP"}, 
      {"name": "Jersey", "code": "JE"}, 
      {"name": "Jordan", "code": "JO"}, 
      {"name": "Kazakhstan", "code": "KZ"}, 
      {"name": "Kenya", "code": "KE"}, 
      {"name": "Kiribati", "code": "KI"}, 
      {"name": "Korea, Democratic People\"S Republic of", "code": "KP"}, 
      {"name": "Korea, Republic of", "code": "KR"}, 
      {"name": "Kuwait", "code": "KW"}, 
      {"name": "Kyrgyzstan", "code": "KG"}, 
      {"name": "Lao People\"S Democratic Republic", "code": "LA"}, 
      {"name": "Latvia", "code": "LV"}, 
      {"name": "Lebanon", "code": "LB"}, 
      {"name": "Lesotho", "code": "LS"}, 
      {"name": "Liberia", "code": "LR"}, 
      {"name": "Libyan Arab Jamahiriya", "code": "LY"}, 
      {"name": "Liechtenstein", "code": "LI"}, 
      {"name": "Lithuania", "code": "LT"}, 
      {"name": "Luxembourg", "code": "LU"}, 
      {"name": "Macao", "code": "MO"}, 
      {"name": "Macedonia, The Former Yugoslav Republic of", "code": "MK"}, 
      {"name": "Madagascar", "code": "MG"}, 
      {"name": "Malawi", "code": "MW"}, 
      {"name": "Malaysia", "code": "MY"}, 
      {"name": "Maldives", "code": "MV"}, 
      {"name": "Mali", "code": "ML"}, 
      {"name": "Malta", "code": "MT"}, 
      {"name": "Marshall Islands", "code": "MH"}, 
      {"name": "Martinique", "code": "MQ"}, 
      {"name": "Mauritania", "code": "MR"}, 
      {"name": "Mauritius", "code": "MU"}, 
      {"name": "Mayotte", "code": "YT"}, 
      {"name": "Mexico", "code": "MX"}, 
      {"name": "Micronesia, Federated States of", "code": "FM"}, 
      {"name": "Moldova, Republic of", "code": "MD"}, 
      {"name": "Monaco", "code": "MC"}, 
      {"name": "Mongolia", "code": "MN"}, 
      {"name": "Montenegro", "code": "ME"},
      {"name": "Montserrat", "code": "MS"},
      {"name": "Morocco", "code": "MA"}, 
      {"name": "Mozambique", "code": "MZ"}, 
      {"name": "Myanmar", "code": "MM"}, 
      {"name": "Namibia", "code": "NA"}, 
      {"name": "Nauru", "code": "NR"}, 
      {"name": "Nepal", "code": "NP"}, 
      {"name": "Netherlands", "code": "NL"}, 
      {"name": "Netherlands Antilles", "code": "AN"}, 
      {"name": "New Caledonia", "code": "NC"}, 
      {"name": "New Zealand", "code": "NZ"}, 
      {"name": "Nicaragua", "code": "NI"}, 
      {"name": "Niger", "code": "NE"}, 
      {"name": "Nigeria", "code": "NG"}, 
      {"name": "Niue", "code": "NU"}, 
      {"name": "Norfolk Island", "code": "NF"}, 
      {"name": "Northern Mariana Islands", "code": "MP"}, 
      {"name": "Norway", "code": "NO"}, 
      {"name": "Oman", "code": "OM"}, 
      {"name": "Pakistan", "code": "PK"}, 
      {"name": "Palau", "code": "PW"}, 
      {"name": "Palestinian Territory, Occupied", "code": "PS"}, 
      {"name": "Panama", "code": "PA"}, 
      {"name": "Papua New Guinea", "code": "PG"}, 
      {"name": "Paraguay", "code": "PY"}, 
      {"name": "Peru", "code": "PE"}, 
      {"name": "Philippines", "code": "PH"}, 
      {"name": "Pitcairn", "code": "PN"}, 
      {"name": "Poland", "code": "PL"}, 
      {"name": "Portugal", "code": "PT"}, 
      {"name": "Puerto Rico", "code": "PR"}, 
      {"name": "Qatar", "code": "QA"}, 
      {"name": "Reunion", "code": "RE"}, 
      {"name": "Romania", "code": "RO"}, 
      {"name": "Russian Federation", "code": "RU"}, 
      {"name": "RWANDA", "code": "RW"}, 
      {"name": "Saint Helena", "code": "SH"}, 
      {"name": "Saint Kitts and Nevis", "code": "KN"}, 
      {"name": "Saint Lucia", "code": "LC"}, 
      {"name": "Saint Pierre and Miquelon", "code": "PM"}, 
      {"name": "Saint Vincent and the Grenadines", "code": "VC"}, 
      {"name": "Samoa", "code": "WS"}, 
      {"name": "San Marino", "code": "SM"}, 
      {"name": "Sao Tome and Principe", "code": "ST"}, 
      {"name": "Saudi Arabia", "code": "SA"}, 
      {"name": "Senegal", "code": "SN"}, 
      {"name": "Serbia", "code": "RS"}, 
      {"name": "Seychelles", "code": "SC"}, 
      {"name": "Sierra Leone", "code": "SL"}, 
      {"name": "Singapore", "code": "SG"}, 
      {"name": "Slovakia", "code": "SK"}, 
      {"name": "Slovenia", "code": "SI"}, 
      {"name": "Solomon Islands", "code": "SB"}, 
      {"name": "Somalia", "code": "SO"}, 
      {"name": "South Africa", "code": "ZA"}, 
      {"name": "South Georgia and the South Sandwich Islands", "code": "GS"}, 
      {"name": "Spain", "code": "ES"}, 
      {"name": "Sri Lanka", "code": "LK"}, 
      {"name": "Sudan", "code": "SD"}, 
      {"name": "Suriname", "code": "SR"}, 
      {"name": "Svalbard and Jan Mayen", "code": "SJ"}, 
      {"name": "Swaziland", "code": "SZ"}, 
      {"name": "Sweden", "code": "SE"}, 
      {"name": "Switzerland", "code": "CH"}, 
      {"name": "Syrian Arab Republic", "code": "SY"}, 
      {"name": "Taiwan, Province of China", "code": "TW"}, 
      {"name": "Tajikistan", "code": "TJ"}, 
      {"name": "Tanzania, United Republic of", "code": "TZ"}, 
      {"name": "Thailand", "code": "TH"}, 
      {"name": "Timor-Leste", "code": "TL"}, 
      {"name": "Togo", "code": "TG"}, 
      {"name": "Tokelau", "code": "TK"}, 
      {"name": "Tonga", "code": "TO"}, 
      {"name": "Trinidad and Tobago", "code": "TT"}, 
      {"name": "Tunisia", "code": "TN"}, 
      {"name": "Turkey", "code": "TR"}, 
      {"name": "Turkmenistan", "code": "TM"}, 
      {"name": "Turks and Caicos Islands", "code": "TC"}, 
      {"name": "Tuvalu", "code": "TV"}, 
      {"name": "Uganda", "code": "UG"}, 
      {"name": "Ukraine", "code": "UA"}, 
      {"name": "United Arab Emirates", "code": "AE"}, 
      {"name": "United Kingdom", "code": "GB"}, 
      {"name": "United States", "code": "US"}, 
      {"name": "United States Minor Outlying Islands", "code": "UM"}, 
      {"name": "Uruguay", "code": "UY"}, 
      {"name": "Uzbekistan", "code": "UZ"}, 
      {"name": "Vanuatu", "code": "VU"}, 
      {"name": "Venezuela", "code": "VE"}, 
      {"name": "Viet Nam", "code": "VN"}, 
      {"name": "Virgin Islands, British", "code": "VG"}, 
      {"name": "Virgin Islands, U.S.", "code": "VI"}, 
      {"name": "Wallis and Futuna", "code": "WF"}, 
      {"name": "Western Sahara", "code": "EH"}, 
      {"name": "Yemen", "code": "YE"}, 
      {"name": "Zambia", "code": "ZM"}, 
      {"name": "Zimbabwe", "code": "ZW"} 
      ]);
    getLinkedlnUser();
    assignUserToCampaign();
    getRobotMessage();
    sendTwoFaCode();
  }, []);

  const handleTwoFaChange = () => {
    console.log(twofaRef.current.value);
  };

  const handleUsernameChange = () => {
    console.log(usernameRef.current.value);
  };

  const handlePasswordChange = () => {
    console.log(passwordRef.current.value);
  };

  const handleCountryChange = (e) => {
    // alert("bola")
    // console.log(e.target.value)
    console.log(countryRef.current.value);
  };

  const twofaRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const countryRef = useRef(null);

  const handleCodeSubmit = async (e) => {
    e.preventDefault();
    try {
      var vc = twofaRef.current.value;
      await sendTwoFaCode(vc);
    }
    catch (error) {
      console.log("hi there", error.message);
    }
    setShowMessage(true);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var lu = usernameRef.current.value;
      var lp = passwordRef.current.value;
      var lc = countryRef.current.value;
      console.log(lu, lp, lc);
      await sendRobotData(lu, lp, lc)
      // console.log(res.message);
    } catch (error) {
      console.log("hey", error.message);
    }
    setShowMessage(true);
  };

  useEffect(() => {
    if (typeof linkedlnUsers.linkedinUsers !== "undefined") {
      console.log(linkedlnUsers.linkedinUsers);
      setLinkUser(linkedlnUsers.linkedinUsers);
    }
  }, [linkedlnUsers]);

  const [linkedlnId, setLinkedlnId] = useState("");

  const handleOptions = () => {
    setShowOptions(true);
  };

  const handleOptionTwo = () => {
    setShowSecOption(true);
  };

  const cancelOptionTwo = () => {
    setShowSecOption(false);
  };

  const cancelOptions = () => {
    setShowOptions(false);
  };

  return (
    <div className="assign-usermod">
      {typeof robotMessages.messages !== "undefined" && showMessage &&
      <span>
        {typeof robotMessages.messages[0] !== "undefined" &&
        <span>
          {robotMessages.messages[0].message}
        </span>
        }
      </span>
      }
      {typeof assignUserMessage.message !== "undefined" && (
        <div className="success">{assignUserMessage.message}</div>
      )}

      {typeof assignUserMessage.error !== "undefined" && (
        <div className="error">{assignUserMessage.error}</div>
      )}

      {typeof verifyMessage.message !== "undefined" && showMessage && (
        <span>
          <div className="success">{verifyMessage.message}</div>
        </span>
      )}
      <div
        className="my-3 mod-check no1"
        onClick={() => {
          {
            showOptions === false && handleOptions();
          }
          {
            showOptions === true && cancelOptions();
          }
        }}
      >
        <h6>Assign existing user</h6>
      </div>

      {showOptions && (
        <div className="inner-slct">
          <select
            className="form-select inner-select"
            aria-label="Default select example"
            onChange={(e) => {
              setLinkedlnId(e.target.value);
            }}
          >
            <option selected hidden className="slct-plchldr">
              Select new user
            </option>
            {linkUser.map((thisLinkedlnName, index) => {
              return (
                <option value={thisLinkedlnName.id} key={index}>
                  {thisLinkedlnName.name}
                </option>
              );
            })}
          </select>

          <button
            className="mt-2 assign-btn"
            onClick={() => {
              assignUserToCampaign(linkedlnId);
            }}
          >
            Assign User
          </button>
        </div>
      )}

      <div
        className="my-3 mod-check"
        onClick={() => {
          {
            showSecOption === false && handleOptionTwo();
          }
          {
            showSecOption === true && cancelOptionTwo();
          }
        }}
      >
        <h6>Add new user</h6>
      </div>

      {showSecOption && (
        <div>
        { !show2fa &&
        <span>
          <div className="my-2 mod-form">
            <input
              type="text"
              className="form-control inner-input"
              id="exampleFormControlInput1"
              placeholder="Linkedln Username"
              ref={usernameRef}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="my-2 mod-form">
            <input
              type="password"
              className="form-control inner-input"
              id="exampleFormControlInput1"
              placeholder="Linkedln Password"
              ref={passwordRef}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="my-2">
            
            <select className="form-select inner-input"
          
              ref={countryRef}
              onChange={(e) => {
                handleCountryChange(e);
              }}
              name="country"
              id="country-name-inner"
              placeholder="Select Country"
            
            >
              {countries.map((country, index) => {
                return(
                  <option value={country.name}>{country.name}</option>
                )
              })}
            </select>
          </div>
        </span>
        }

        {show2fa &&
        <span>
          <div>
            <div className="my-2 mod-form">
              <input
                type="text"
                className="form-control inner-input"
                id="exampleFormControlInput1"
                placeholder="Two FA Code"
                ref={twofaRef}
                onChange={handleTwoFaChange}
              />

              <button 
                className="my-2 btn btn-primary"
                onClick={handleCodeSubmit}
              >
                verify
              </button>
            </div>
          </div>  
        </span>
        }
        

        {/* <p
            className="mt-2"
            onClick={()=>
              setShow2fa(!show2fa)
            }
          >
            {!show2fa ? "Show 2FA Form" : "Hide 2FA Form"}
          </p> */}


        {!show2fa &&

          
          <button className="mt-2 assign-btn" onClick={handleSubmit}>
            Add User
          </button>
        }
          <button
            className="mt-2 lite-btn"
            style={{ marginLeft: "5px" }}
            onClick={()=>
              setShow2fa(!show2fa)
            }
          >
            {!show2fa ? "Show 2FA Form" : "Hide 2FA Form"}
          </button>
        </div>
      )}
    </div>
  );
}
