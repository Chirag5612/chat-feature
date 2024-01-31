import React, { useState,useEffect } from "react";
import { Layout, Menu, Image } from "antd";
import { useNavigate } from "react-router-dom";
import {
    HomeOutlined,
    UsergroupAddOutlined,
    FormOutlined,
    DiffOutlined,
    UserAddOutlined,
    FileImageOutlined,
    ContainerOutlined,
    MoneyCollectOutlined,
    TransactionOutlined,
    InfoCircleOutlined,
    BulbOutlined,
    PaperClipOutlined,
    GoldOutlined,
    SettingOutlined,
    MoreOutlined,
    RadiusSettingOutlined,
    WindowsOutlined,
    InstagramOutlined,
    ClusterOutlined,
    ToolOutlined,
    UngroupOutlined,
    SnippetsOutlined,
    CloseCircleOutlined
} from '@ant-design/icons';
import logo from '../../../assets/images/mm-logo-1.png'

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { Sider } = Layout;
    const navigate = useNavigate();
    const onMenuClick = (event) => {
        const { key } = event
        navigate(key)
    }

    useEffect(() => {
        if(collapsed){
          document.body.classList.add('hasOpen')
        }
        else {
          document.body.classList.remove('hasOpen')
        }
      }, [collapsed])

    const commonChildrenArray = [
        {
            label: 'Categories Dispute',
            key: 'categories-dispute',
            icon: <ClusterOutlined />
        },
        {
            label: 'Service Type',
            key: 'service-type',
            icon: <ToolOutlined />
        },
        {
            label: 'Assets',
            key: 'assets',
            icon: <UngroupOutlined />
        },
        {
            label: 'Cancel Reason',
            key: 'cancel-reson',
            icon: <CloseCircleOutlined />
        },
        {
            label: 'Faqs',
            key: 'faq',
            icon: <FormOutlined />
        },
    ];
    const settingChildrenArray = [
        {
            label: 'CMS',
            key: 'cms',
            icon: <WindowsOutlined />
        },
        {
            label: 'Our Contact Us',
            key: 'our-contact-us',
            icon: <WindowsOutlined />
        },
        {
            label: 'Setting',
            key: 'setting',
            icon: <RadiusSettingOutlined />
        },
        {
            label: 'Social Media',
            key: 'social-media',
            icon: <InstagramOutlined />
        },
        {
            label: 'Why Maintenance Master',
            key: 'why-maintenance',
            icon: <InstagramOutlined />
        },
    ];


    const items = [
        {
            label: 'Dashboard',
            key: 'dashboard',
            icon: <HomeOutlined />
        },
        {
            label: 'Customer',
            key: 'customer',
            icon: <UsergroupAddOutlined />
        },
        {
            label: 'Vendor',
            key: 'vendor',
            icon: <UserAddOutlined />
        },
        {
            label: 'My Inbox',
            key: 'chat',
            icon: <SnippetsOutlined />,
        },
        {
            label: 'Service Request',
            key: 'service-request',
            icon: <FormOutlined />
        },
        {
            label: 'Post',
            key: 'post',
            icon: <FileImageOutlined />
        },
        // {
        //     label: 'Commission Manage',
        //     key: 'vendor-commission',
        //     icon: <ContainerOutlined />
        // },
        // {
        //     label: 'Commission History',
        //     key: 'commission-history',
        //     icon: <AliwangwangOutlined />
        // },
        // {
        //     label: 'Payment Transaction',
        //     key: 'payment-transaction',
        //     icon: <TransactionOutlined />
        // },
        // {
        //     label: 'Earning',
        //     key: 'earning',
        //     icon: <MoneyCollectOutlined />
        // },

        {
            label: 'User Inquiry',
            key: 'contact-us',
            icon: <InfoCircleOutlined />
        },
        {
            label: 'Suggestions',
            key: 'suggestions',
            icon: <BulbOutlined />
        },
        {
            label: 'Report Request',
            key: 'report-request',
            icon: <DiffOutlined />
        },
        // {
        //     label: 'Visit Site',
        //     key: 'visit-site',
        //     icon: <AliwangwangOutlined />
        // },
        {
            label: 'Knowledge Sharing',
            key: 'training-material',
            icon: <PaperClipOutlined />
        },
        {
            label: 'Assets',
            key: 'asset',
            icon: <GoldOutlined />
        },
        {
            label: 'More',
            key: 'common',
            icon: <MoreOutlined />,
            children: commonChildrenArray,
        },
        {
            label: 'Setting',
            key: 'setting-all',
            icon: <SettingOutlined />,
            children: settingChildrenArray,
        },
    ];

    return <>
        <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
                background: "linear-gradient(50deg, #0376BC 50%, #00C4E6 100%)"
            }}
            // className="my-sidermenu-color sidebar-scroll-manage h-auto" 
            collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} id="sidebar_scroll"
        >
            <div className="logo" >
                <Image src={logo} alt='' preview={false} />
            </div>
            <Menu
                mode="inline"
                className="my-sidermenu-color"
                onClick={onMenuClick}
                items={items}
                style={{ minWidth: 0, flex: "auto",paddingBottom:40 }}
                theme={{ textColor: '#fff' }}
            />
        </Sider>
    </>

}
export default Sidebar;