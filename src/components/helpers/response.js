import { toast } from 'react-toastify';
import { Button } from "antd";
import jsPDF from "jspdf";
import "jspdf-autotable";

function isLoginResponse(navigate) {
    const isLogin = localStorage.getItem("accessToken") || false;
    if (isLogin === null) {
        navigate('/login');
    }
    if (isLogin === false) {
        navigate('/login');
    }
}
function isJson(objData) {
    try {
        JSON.parse(objData);
    } catch (e) {
        //Error
        //JSON is not okay
        return false;
    }

    return true;

}
function validateMessages() {
    /* eslint-disable no-template-curly-in-string */

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };
    /* eslint-enable no-template-curly-in-string */

    return validateMessages;
}
function stripePaymentIntentStatus(status) {
    var result = 0;
    if (Number(status) === 1) {
        result = 'Amount Capturable Updated';
    }
    if (Number(status) === 2) {
        result = 'Canceled';
    }
    if (Number(status) === 3) {
        result = 'Created';
    }
    if (Number(status) === 4) {
        result = 'Partially Funded';
    }
    if (Number(status) === 5) {
        result = 'Payment Failed';
    }
    if (Number(status) === 6) {
        result = 'Processing';
    }
    if (Number(status) === 7) {
        result = 'Requires Action';
    }
    if (Number(status) === 8) {
        result = 'Succeeded';
    }
    return result;
};


function configEditorInit() {
    const config = {
        height: 500,
        menubar: false,
        plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
        ],
        toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | image |help ',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
    }
    return config;
}
function configHeaderAxios() {
    const config = {
        headers: {
            'content-type': 'application/json',
            'authorization': localStorage.getItem('accessToken')
        }
    }
    return config;
}
function errorResponse(error) {
    if (error.response.status === 422) {
        let errorData = error.response.data;
        if (errorData) {
            if (errorData.message) {
                toast(`${errorData.message} !`);
            }
            if (error.response.data.data) {
                var errors = Object.values(error.response.data.data);
                if (errors) {
                    errors.forEach((err) => {
                        toast(`${err} !`);
                    });
                }
            }
        }
    }
    if (error.response.status === 401) {
        let errorData = error.response.data.message;
        localStorage.clear();
        toast(`${errorData} !`);
        window.location.reload();
    }

}

function successResponse(response) {
    if (response.status === 200) {
        if (response.data.message) {
            toast.success(`${response.data.message} !`, {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }
}


function serviceRequestStatus(status) {
    var result = <Button className='bid-status-btn' style={{ color: '#fff', backgroundColor: '#F09E00', borderRadius: 20 }}>
        Awaiting Bids
    </Button>;
    if (Number(status) === 1) {
        result = <Button className='bid-status-btn' style={{ color: '#fff', backgroundColor: '#F09E00', borderRadius: 20 }}>
            Pending
        </Button>
    }
    if (Number(status) === 2) {
        result = <Button className='bid-status-btn' style={{ color: '#fff', backgroundColor: '#F09E00', borderRadius: 20 }}>
            Awaiting Bids
        </Button>
    }
    if (Number(status) === 3) {
        result = <Button className='bid-status-btn' style={{ color: '#fff', backgroundColor: '#F09E00', borderRadius: 20 }}>
            Process
        </Button>
    }
    if (Number(status) === 4) {
        result = <Button className='bid-status-btn' style={{ color: '#fff', backgroundColor: '#0376BC', borderRadius: 20 }}>
            Close
        </Button>
    }
    if (Number(status) === 5) {
        result = <Button className='bid-status-btn' style={{ color: '#fff', backgroundColor: '#00C4E6', borderRadius: 20 }}>
            Completed
        </Button>
    }
    if (Number(status) === 6) {
        result = <Button className='bid-status-btn' style={{ color: '#fff', backgroundColor: '#F56A2F', borderRadius: 20 }}>
            Disputed
        </Button>
    }
    if (Number(status) === 7) {
        result = <Button className='bid-status-btn' style={{ color: '#fff', backgroundColor: '#E51111', borderRadius: 20 }}>
            Expired
        </Button>
    }
    if (Number(status) === 8) {
        result = <Button className='bid-status-btn' style={{ color: '#fff', backgroundColor: '#009B22', borderRadius: 20 }}>
            Awarded
        </Button>
    }
    if (Number(status) === 9) {
        result = <Button className='bid-status-btn' style={{ color: '#fff', backgroundColor: '#E51111', borderRadius: 20 }}>
            Cancelled
        </Button>
    }
    if (Number(status) === 10) {
        result = <Button className='bid-status-btn' style={{ color: '#fff', backgroundColor: '#0376BC', borderRadius: 20 }}>
            Close By Admin
        </Button>
    }

    return result;
};
function getRequestStatus(status) {

    let result = [
        {
            id: '',
            name: 'Select Status'
        },
        {
            id: 1,
            name: 'Pending'
        },
        {
            id: 2,
            name: 'Awaiting Bids'
        },
        {
            id: 3,
            name: 'Process'
        },
        {
            id: 4,
            name: 'Close'
        },
        {
            id: 5,
            name: 'Completed'
        },
        {
            id: 6,
            name: 'Disputed'
        },
        {
            id: 7,
            name: 'Expired'
        },
        {
            id: 8,
            name: 'Awarded'
        },
        {
            id: 9,
            name: 'Cancelled'
        },
    ]
    return result;
};
const rating5Color = (e) => {
    switch (e) {
        case 1:
            return '#c00000'
            break;
        case 2:
            return '#ff0000'
            break;
        case 3:
            return '#fffb00'
            break;
        case 4:
            return '#a8d08c'
            break;
        case 5:
            return '#538135'
            break;
        default:
            return '#f0f0f0'
            break;
    }

}
const rating9Color = (e) => {
    switch (e) {
        case 1:
            return '#c00000'
            break;
        case 2:
            return '#ff0000'
            break;
        case 3:
            return '#ff6600'
            break;
        case 4:
            return '#ff9900'
            break;
        case 5:
            return '#ffc000'
            break;
        case 6:
            return '#ffff00'
            break;
        case 7:
            return '#92d050'
            break;
        case 8:
            return '#328320'
            break;
        case 9:
            return '#215815'
            break;


        default:
            return '#f0f0f0'
            break;
    }
}


const exportPDFTable = (title,headers,datas) => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    let content = {
      startY: 50,
      head: headers,
      body: datas
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save(`${title.split(" ").join("")}.pdf`)
}

function alertMessage(message) {
    toast(`${message}`);
}

export {
    isLoginResponse,
    validateMessages,
    configHeaderAxios,
    configEditorInit,
    errorResponse,
    successResponse,
    stripePaymentIntentStatus,
    serviceRequestStatus,
    isJson,
    rating9Color,
    getRequestStatus,
    rating5Color,
    alertMessage,
    exportPDFTable
};