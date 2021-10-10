import React from "react";
import * as yup from "yup";
import { Col, Row, Form, InputGroup, Button } from "react-bootstrap";

import { Formik } from "formik";

const schema = yup.object().shape({
  restaurantName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  file: yup.mixed().required(),
  terms: yup.bool().required().oneOf([true], "terms must be accepted"),
});

function RestaurantDetails() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        restaurantName: "Mark",
        lastName: "Otto",
        username: "",
        city: "",
        state: "",
        zip: "",
        file: null,
        terms: false,
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
              className="position-relative"
            >
              <Form.Label>Restaurant name</Form.Label>
              <Form.Control
                type="text"
                name="restaurantName"
                value={values.restaurantName}
                onChange={handleChange}
                isValid={touched.restaurantName && !errors.restaurantName}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>Country</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              /> */}
              <Form.Select aria-label="Floating label select example">
                <option value="  " selected>
                  Select a country
                </option>
                <option value="--">Not Specified</option>
                <option value="AF">Afghanistan</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AS">American Samoa</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="AQ">Antarctica</option>
                <option value="AG">Antigua and Barbuda</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia</option>
                <option value="BA">Bosnia and Herzegowina</option>
                <option value="BW">Botswana</option>
                <option value="BV">Bouvet Island</option>
                <option value="BR">Brazil</option>
                <option value="IO">British Indian Ocean Territory</option>
                <option value="BN">Brunei Darussalam</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CV">Cape Verde</option>
                <option value="KY">Cayman Islands</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CX">Christmas Island</option>
                <option value="CC">Cocos (Keeling) Islands</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CG">Congo</option>
                <option value="CD">
                  Congo, the Democratic Republic of the
                </option>
                <option value="CK">Cook Islands</option>
                <option value="CR">Costa Rica</option>
                <option value="CI">Cote d'Ivoire</option>
                <option value="HR">Croatia (Hrvatska)</option>
                <option value="CU">Cuba</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="TP">East Timor</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="ET">Ethiopia</option>
                <option value="FK">Falkland Islands (Malvinas)</option>
                <option value="FO">Faroe Islands</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="FX">France, Metropolitan</option>
                <option value="GF">French Guiana</option>
                <option value="PF">French Polynesia</option>
                <option value="TF">French Southern Territories</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GI">Gibraltar</option>
                <option value="GR">Greece</option>
                <option value="GL">Greenland</option>
                <option value="GD">Grenada</option>
                <option value="GP">Guadeloupe</option>
                <option value="GU">Guam</option>
                <option value="GT">Guatemala</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HM">Heard and Mc Donald Islands</option>
                <option value="VA">Holy See (Vatican City State)</option>
                <option value="HN">Honduras</option>
                <option value="HK">Hong Kong</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran (Islamic Republic of)</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="KP">
                  Korea, Democratic People's Republic of
                </option>
                <option value="KR">Korea, Republic of</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Lao People's Democratic Republic</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libyan Arab Jamahiriya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MO">Macau</option>
                <option value="MK">
                  Macedonia, The Former Yugoslav Republic of
                </option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MH">Marshall Islands</option>
                <option value="MQ">Martinique</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="YT">Mayotte</option>
                <option value="MX">Mexico</option>
                <option value="FM">Micronesia, Federated States of</option>
                <option value="MD">Moldova, Republic of</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="MS">Montserrat</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="AN">Netherlands Antilles</option>
                <option value="NC">New Caledonia</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="NU">Niue</option>
                <option value="NF">Norfolk Island</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PN">Pitcairn</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="PR">Puerto Rico</option>
                <option value="QA">Qatar</option>
                <option value="RE">Reunion</option>
                <option value="RO">Romania</option>
                <option value="RU">Russian Federation</option>
                <option value="RW">Rwanda</option>
                <option value="KN">Saint Kitts and Nevis</option>
                <option value="LC">Saint LUCIA</option>
                <option value="VC">Saint Vincent and the Grenadines</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">Sao Tome and Principe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SK">Slovakia (Slovak Republic)</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="GS">
                  South Georgia and the South Sandwich Islands
                </option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="SH">St. Helena</option>
                <option value="PM">St. Pierre and Miquelon</option>
                <option value="SD">Sudan</option>
                <option value="SR">Suriname</option>
                <option value="SJ">Svalbard and Jan Mayen Islands</option>
                <option value="SZ">Swaziland</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="SY">Syrian Arab Republic</option>
                <option value="TW">Taiwan, Province of China</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania, United Republic of</option>
                <option value="TH">Thailand</option>
                <option value="TG">Togo</option>
                <option value="TK">Tokelau</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad and Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TC">Turks and Caicos Islands</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UM">United States Minor Outlying Islands</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VE">Venezuela</option>
                <option value="VN">Viet Nam</option>
                <option value="VG">Virgin Islands (British)</option>
                <option value="VI">Virgin Islands (U.S.)</option>
                <option value="WF">Wallis and Futuna Islands</option>
                <option value="EH">Western Sahara</option>
                <option value="YE">Yemen</option>
                <option value="YU">Yugoslavia</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik104"
              className="position-relative"
            >
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik105"
              className="position-relative"
            >
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="position-relative mb-3">
            <Form.Label>File</Form.Label>
            <Form.Control
              type="file"
              required
              name="file"
              onChange={handleChange}
              isInvalid={!!errors.file}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.file}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="position-relative mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik106"
              feedbackTooltip
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}
export default RestaurantDetails;

// function RestaurantDetails(props) {
//   return (
//     <form className="RestaurantDetails">
//       <div className="form-row">
//         <div className="col-md-4 mb-3">
//           <label for="validationDefault01">Restaurant name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="validationDefault01"
//             placeholder="First name"
//             value="Mark"
//             required
//           />
//         </div>
//         <div className="col-md-4 mb-3">
//           <label for="validationDefault02">Owner name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="validationDefault02"
//             placeholder="Last name"
//             value="Otto"
//             required
//           />
//         </div>
//         <div className="col-md-4 mb-3">
//           <label for="validationDefault02">Restaurant Description</label>
//           <input
//             type="text"
//             className="form-control"
//             id="validationDefault02"
//             placeholder="Last name"
//             value="Otto"
//             required
//           />
//         </div>
//         <label for="validationDefaultUsername">Country </label> &nbsp; &nbsp;
//         &nbsp;
//         <select className="custom-select">
//           <option value="  " selected>
//             Select a country
//           </option>
//           <option value="--">Not Specified</option>
//           <option value="AF">Afghanistan</option>
//           <option value="AL">Albania</option>
//           <option value="DZ">Algeria</option>
//           <option value="AS">American Samoa</option>
//           <option value="AD">Andorra</option>
//           <option value="AO">Angola</option>
//           <option value="AI">Anguilla</option>
//           <option value="AQ">Antarctica</option>
//           <option value="AG">Antigua and Barbuda</option>
//           <option value="AR">Argentina</option>
//           <option value="AM">Armenia</option>
//           <option value="AW">Aruba</option>
//           <option value="AU">Australia</option>
//           <option value="AT">Austria</option>
//           <option value="AZ">Azerbaijan</option>
//           <option value="BS">Bahamas</option>
//           <option value="BH">Bahrain</option>
//           <option value="BD">Bangladesh</option>
//           <option value="BB">Barbados</option>
//           <option value="BY">Belarus</option>
//           <option value="BE">Belgium</option>
//           <option value="BZ">Belize</option>
//           <option value="BJ">Benin</option>
//           <option value="BM">Bermuda</option>
//           <option value="BT">Bhutan</option>
//           <option value="BO">Bolivia</option>
//           <option value="BA">Bosnia and Herzegowina</option>
//           <option value="BW">Botswana</option>
//           <option value="BV">Bouvet Island</option>
//           <option value="BR">Brazil</option>
//           <option value="IO">British Indian Ocean Territory</option>
//           <option value="BN">Brunei Darussalam</option>
//           <option value="BG">Bulgaria</option>
//           <option value="BF">Burkina Faso</option>
//           <option value="BI">Burundi</option>
//           <option value="KH">Cambodia</option>
//           <option value="CM">Cameroon</option>
//           <option value="CA">Canada</option>
//           <option value="CV">Cape Verde</option>
//           <option value="KY">Cayman Islands</option>
//           <option value="CF">Central African Republic</option>
//           <option value="TD">Chad</option>
//           <option value="CL">Chile</option>
//           <option value="CN">China</option>
//           <option value="CX">Christmas Island</option>
//           <option value="CC">Cocos (Keeling) Islands</option>
//           <option value="CO">Colombia</option>
//           <option value="KM">Comoros</option>
//           <option value="CG">Congo</option>
//           <option value="CD">Congo, the Democratic Republic of the</option>
//           <option value="CK">Cook Islands</option>
//           <option value="CR">Costa Rica</option>
//           <option value="CI">Cote d'Ivoire</option>
//           <option value="HR">Croatia (Hrvatska)</option>
//           <option value="CU">Cuba</option>
//           <option value="CY">Cyprus</option>
//           <option value="CZ">Czech Republic</option>
//           <option value="DK">Denmark</option>
//           <option value="DJ">Djibouti</option>
//           <option value="DM">Dominica</option>
//           <option value="DO">Dominican Republic</option>
//           <option value="TP">East Timor</option>
//           <option value="EC">Ecuador</option>
//           <option value="EG">Egypt</option>
//           <option value="SV">El Salvador</option>
//           <option value="GQ">Equatorial Guinea</option>
//           <option value="ER">Eritrea</option>
//           <option value="EE">Estonia</option>
//           <option value="ET">Ethiopia</option>
//           <option value="FK">Falkland Islands (Malvinas)</option>
//           <option value="FO">Faroe Islands</option>
//           <option value="FJ">Fiji</option>
//           <option value="FI">Finland</option>
//           <option value="FR">France</option>
//           <option value="FX">France, Metropolitan</option>
//           <option value="GF">French Guiana</option>
//           <option value="PF">French Polynesia</option>
//           <option value="TF">French Southern Territories</option>
//           <option value="GA">Gabon</option>
//           <option value="GM">Gambia</option>
//           <option value="GE">Georgia</option>
//           <option value="DE">Germany</option>
//           <option value="GH">Ghana</option>
//           <option value="GI">Gibraltar</option>
//           <option value="GR">Greece</option>
//           <option value="GL">Greenland</option>
//           <option value="GD">Grenada</option>
//           <option value="GP">Guadeloupe</option>
//           <option value="GU">Guam</option>
//           <option value="GT">Guatemala</option>
//           <option value="GN">Guinea</option>
//           <option value="GW">Guinea-Bissau</option>
//           <option value="GY">Guyana</option>
//           <option value="HT">Haiti</option>
//           <option value="HM">Heard and Mc Donald Islands</option>
//           <option value="VA">Holy See (Vatican City State)</option>
//           <option value="HN">Honduras</option>
//           <option value="HK">Hong Kong</option>
//           <option value="HU">Hungary</option>
//           <option value="IS">Iceland</option>
//           <option value="IN">India</option>
//           <option value="ID">Indonesia</option>
//           <option value="IR">Iran (Islamic Republic of)</option>
//           <option value="IQ">Iraq</option>
//           <option value="IE">Ireland</option>
//           <option value="IL">Israel</option>
//           <option value="IT">Italy</option>
//           <option value="JM">Jamaica</option>
//           <option value="JP">Japan</option>
//           <option value="JO">Jordan</option>
//           <option value="KZ">Kazakhstan</option>
//           <option value="KE">Kenya</option>
//           <option value="KI">Kiribati</option>
//           <option value="KP">Korea, Democratic People's Republic of</option>
//           <option value="KR">Korea, Republic of</option>
//           <option value="KW">Kuwait</option>
//           <option value="KG">Kyrgyzstan</option>
//           <option value="LA">Lao People's Democratic Republic</option>
//           <option value="LV">Latvia</option>
//           <option value="LB">Lebanon</option>
//           <option value="LS">Lesotho</option>
//           <option value="LR">Liberia</option>
//           <option value="LY">Libyan Arab Jamahiriya</option>
//           <option value="LI">Liechtenstein</option>
//           <option value="LT">Lithuania</option>
//           <option value="LU">Luxembourg</option>
//           <option value="MO">Macau</option>
//           <option value="MK">Macedonia, The Former Yugoslav Republic of</option>
//           <option value="MG">Madagascar</option>
//           <option value="MW">Malawi</option>
//           <option value="MY">Malaysia</option>
//           <option value="MV">Maldives</option>
//           <option value="ML">Mali</option>
//           <option value="MT">Malta</option>
//           <option value="MH">Marshall Islands</option>
//           <option value="MQ">Martinique</option>
//           <option value="MR">Mauritania</option>
//           <option value="MU">Mauritius</option>
//           <option value="YT">Mayotte</option>
//           <option value="MX">Mexico</option>
//           <option value="FM">Micronesia, Federated States of</option>
//           <option value="MD">Moldova, Republic of</option>
//           <option value="MC">Monaco</option>
//           <option value="MN">Mongolia</option>
//           <option value="MS">Montserrat</option>
//           <option value="MA">Morocco</option>
//           <option value="MZ">Mozambique</option>
//           <option value="MM">Myanmar</option>
//           <option value="NA">Namibia</option>
//           <option value="NR">Nauru</option>
//           <option value="NP">Nepal</option>
//           <option value="NL">Netherlands</option>
//           <option value="AN">Netherlands Antilles</option>
//           <option value="NC">New Caledonia</option>
//           <option value="NZ">New Zealand</option>
//           <option value="NI">Nicaragua</option>
//           <option value="NE">Niger</option>
//           <option value="NG">Nigeria</option>
//           <option value="NU">Niue</option>
//           <option value="NF">Norfolk Island</option>
//           <option value="MP">Northern Mariana Islands</option>
//           <option value="NO">Norway</option>
//           <option value="OM">Oman</option>
//           <option value="PK">Pakistan</option>
//           <option value="PW">Palau</option>
//           <option value="PA">Panama</option>
//           <option value="PG">Papua New Guinea</option>
//           <option value="PY">Paraguay</option>
//           <option value="PE">Peru</option>
//           <option value="PH">Philippines</option>
//           <option value="PN">Pitcairn</option>
//           <option value="PL">Poland</option>
//           <option value="PT">Portugal</option>
//           <option value="PR">Puerto Rico</option>
//           <option value="QA">Qatar</option>
//           <option value="RE">Reunion</option>
//           <option value="RO">Romania</option>
//           <option value="RU">Russian Federation</option>
//           <option value="RW">Rwanda</option>
//           <option value="KN">Saint Kitts and Nevis</option>
//           <option value="LC">Saint LUCIA</option>
//           <option value="VC">Saint Vincent and the Grenadines</option>
//           <option value="WS">Samoa</option>
//           <option value="SM">San Marino</option>
//           <option value="ST">Sao Tome and Principe</option>
//           <option value="SA">Saudi Arabia</option>
//           <option value="SN">Senegal</option>
//           <option value="SC">Seychelles</option>
//           <option value="SL">Sierra Leone</option>
//           <option value="SG">Singapore</option>
//           <option value="SK">Slovakia (Slovak Republic)</option>
//           <option value="SI">Slovenia</option>
//           <option value="SB">Solomon Islands</option>
//           <option value="SO">Somalia</option>
//           <option value="ZA">South Africa</option>
//           <option value="GS">
//             South Georgia and the South Sandwich Islands
//           </option>
//           <option value="ES">Spain</option>
//           <option value="LK">Sri Lanka</option>
//           <option value="SH">St. Helena</option>
//           <option value="PM">St. Pierre and Miquelon</option>
//           <option value="SD">Sudan</option>
//           <option value="SR">Suriname</option>
//           <option value="SJ">Svalbard and Jan Mayen Islands</option>
//           <option value="SZ">Swaziland</option>
//           <option value="SE">Sweden</option>
//           <option value="CH">Switzerland</option>
//           <option value="SY">Syrian Arab Republic</option>
//           <option value="TW">Taiwan, Province of China</option>
//           <option value="TJ">Tajikistan</option>
//           <option value="TZ">Tanzania, United Republic of</option>
//           <option value="TH">Thailand</option>
//           <option value="TG">Togo</option>
//           <option value="TK">Tokelau</option>
//           <option value="TO">Tonga</option>
//           <option value="TT">Trinidad and Tobago</option>
//           <option value="TN">Tunisia</option>
//           <option value="TR">Turkey</option>
//           <option value="TM">Turkmenistan</option>
//           <option value="TC">Turks and Caicos Islands</option>
//           <option value="TV">Tuvalu</option>
//           <option value="UG">Uganda</option>
//           <option value="UA">Ukraine</option>
//           <option value="AE">United Arab Emirates</option>
//           <option value="GB">United Kingdom</option>
//           <option value="US">United States</option>
//           <option value="UM">United States Minor Outlying Islands</option>
//           <option value="UY">Uruguay</option>
//           <option value="UZ">Uzbekistan</option>
//           <option value="VU">Vanuatu</option>
//           <option value="VE">Venezuela</option>
//           <option value="VN">Viet Nam</option>
//           <option value="VG">Virgin Islands (British)</option>
//           <option value="VI">Virgin Islands (U.S.)</option>
//           <option value="WF">Wallis and Futuna Islands</option>
//           <option value="EH">Western Sahara</option>
//           <option value="YE">Yemen</option>
//           <option value="YU">Yugoslavia</option>
//           <option value="ZM">Zambia</option>
//           <option value="ZW">Zimbabwe</option>
//         </select>
//         <div className="col-md-4 mb-3">
//           <label for="validationDefaultUsername">Username</label>
//           <div className="input-group">
//             <div className="input-group-prepend">
//               <span className="input-group-text" id="inputGroupPrepend2">
//                 @
//               </span>
//             </div>
//             <input
//               type="text"
//               className="form-control"
//               id="validationDefaultUsername"
//               placeholder="Username"
//               aria-describedby="inputGroupPrepend2"
//               required
//             />
//           </div>
//         </div>
//       </div>
//       <div className="form-row">
//         <div className="col-md-4 mb-3">
//           <label for="validationDefault03">Country</label>
//           <input
//             type="text"
//             className="form-control"
//             id="validationDefault03"
//             placeholder="City"
//             required
//           />
//         </div>
//       </div>

//       <div className="form-group">
//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             value=""
//             id="invalidCheck2"
//             required
//           />
//           <label className="form-check-label" for="invalidCheck2">
//             Agree to terms and conditions
//           </label>
//         </div>
//       </div>
//       <button className="btn btn-primary" type="submit">
//         Save
//       </button>
//     </form>
//   );
// }

// RestaurantDetails.propTypes = {};

// export default RestaurantDetails;
