import React from 'react';
import { Form, Upload, Button } from "antd";
import url from "../../../Development.json";
import { alertMessage } from "../../helpers/response";
import { UploadOutlined } from "@ant-design/icons";
import ImgCrop from 'antd-img-crop';

const ImageManage = (props) => {
    const { setUploadImage, uploadImage, typeNo, required, multiple } = props;


    const onChangeImage = (info) => {
        if (info.file.status === 'done') {
            setUploadImage([...uploadImage, info.file.response.data.image_url]);
        }
        if (info.file.status === 'removed') {
            var array = [...uploadImage];
            var index = array.indexOf(info.file.response.data.image_url)
            if (index !== -1) {
                array.splice(index, 1);
                setUploadImage(array)
            }
        }
    };

    let errorMessageShown = false
    const beforeUpload = (file, fileList) => {
        let uploadImageLength = uploadImage.length
        const totalFiles = uploadImageLength + fileList.length
        // add one to account for the current file being uploaded
        if (totalFiles > 5 && !errorMessageShown) {
            errorMessageShown = true
            alertMessage(`You can only upload maximum ${5} images${5 > 1 ? 's' : ''}!`);
            throw new Error(`You can only upload maximum ${5} images${5 > 1 ? 's' : ''}!`);
        }
        return true;
    };


    return (
        <Form.Item
            label="Upload Photo"
            name="upload_photo"
            id="upload_photo"
            rules={[
                {
                    required: required,
                },
            ]}
        >
            <ImgCrop>
                <Upload
                    listType="picture"
                    name='files'
                    action={process.env.REACT_APP_BASE_URL_LOCAL + url.image_upload + '?type=' + typeNo}
                    multiple={multiple}
                    maxCount={5}
                    onChange={onChangeImage}
                    accept="image/*"
                    beforeUpload={beforeUpload}
                >
                    <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
            </ImgCrop>


            

        </Form.Item>
    )
}
export default ImageManage;