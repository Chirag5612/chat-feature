import { Select } from 'antd';
import React, { useState } from 'react';
const ChangeStatus = (props) => {

    const [statusValue, setStatusValue] = useState(props.row.is_active === true ? "Active" : "De-active");

    const onChange = (value) => {
        setStatusValue(value === "true" ? "Active" : "De-active")
        props.changeStatusButtonClick(props.row._id, value)
    };


    return (
        <tr>
            <th>Is Active</th>
            <td>
                <Select
                    showSearch
                    style={{
                        width: "100%",
                    }}
                    placeholder="Select a Status"
                    optionFilterProp="children"
                    onChange={onChange}
                    filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    value={statusValue}
                    options={[
                        {
                            value: "true",
                            label: 'Active',
                        },
                        {
                            value: "false",
                            label: 'De-active',
                        }
                    ]}
                />
                {/* <span className={`btn btn-sm   ${row.is_active === true ? "btn-success" : "btn-danger"}`}>
                {
                    row.is_active === true ? "Yes" : "No"
                }
            </span> */}
            </td>
        </tr>
    )
}
export default ChangeStatus;