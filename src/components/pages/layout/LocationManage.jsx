import React, { useState } from 'react';
import { Input, Form } from 'antd';
import { LoadScript, Autocomplete } from "@react-google-maps/api";

const LocationManage = (props) => {
    const { setAddressAll, setAddress, form , address } = props;
    const [autoComplete, setAutoComplete] = useState(null);


    const onAutoCompletePlaceIsChanged = () => {
        if (autoComplete !== null) {
            setAddress(autoComplete.getPlace().formatted_address);
            let addressManage = {
                address: autoComplete.getPlace().formatted_address,
                latitude: autoComplete.getPlace().geometry.location.lat(),
                longitude: autoComplete.getPlace().geometry.location.lng(),
            };

            setAddressAll(addressManage);
            form.setFieldsValue({
                address: autoComplete.getPlace().formatted_address,
                latitude: autoComplete.getPlace().geometry.location.lat(),
                longitude: autoComplete.getPlace().geometry.location.lng(),
            });

        }
        else {
            console.log("Autocomplete is not loaded yet");
        }
    };

    const addressChange = (e) => {
        setAddress(e.target.value);
    };
    const onAutoCompleteIsLoad = (inputAutoComplete) => {
        setAutoComplete(inputAutoComplete);
    };

    return (
        <Form.Item
            label="Location"
            name="address"
            id="address"
            rules={[
                {
                    required: true,
                    type: 'string',
                    min: 3,
                    max: 500,
                },
            ]}
        >

            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}
                libraries={["drawing", "places"]}
            >
                <Autocomplete
                    onLoad={onAutoCompleteIsLoad}
                    onPlaceChanged={onAutoCompletePlaceIsChanged}
                >
                    <Input
                        value={address}
                        // className="form-control"
                        onChange={(e) => addressChange(e)}
                    />
                </Autocomplete>
            </LoadScript>
            {/* <Input /> */}
        </Form.Item>
    )
}
export default LocationManage;