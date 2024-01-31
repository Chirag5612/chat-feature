import React, { Fragment } from 'react';
import { Table as TableModal } from "reactstrap";
import { Layout, Row, Col } from "antd";
import { rating5Color, rating9Color } from "../../helpers/response";

const Rating = () => {
    const { Content } = Layout;
    return (
        <Fragment>
            <Content className=" m-5">
                <Row>
                    <Col span={11} md={11} sm={24} xs={24} >
                        <div className="table-responsive">
                            <TableModal striped bordered hover className="cr-table">
                                <thead>
                                    <tr>
                                        <td colSpan={2}>
                                            Rating
                                        </td>

                                        <td>
                                            Description
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ backgroundColor: rating5Color(5) }}>5</td>
                                        <td style={{ backgroundColor: rating5Color(5) }}>
                                            New/Excellent
                                        </td>
                                        <td> (No Defects)</td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: rating5Color(4) }}>4</td>
                                        <td style={{ backgroundColor: rating5Color(4) }}>
                                            Good
                                        </td>
                                        <td>
                                            (Minor Isolated Defects, may need preventive repair but
                                            not necessary)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: rating5Color(3) }}>3</td>
                                        <td style={{ backgroundColor: rating5Color(3) }}>
                                            Average
                                        </td>
                                        <td>
                                            (Moderate isolated defects, Minor Repair is
                                            required, the system is functioning as originally design)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: rating5Color(2) }}>2</td>
                                        <td style={{ backgroundColor: rating5Color(2) }}>
                                            Poor
                                        </td>
                                        <td>
                                            (Major Defects, moderate to major repair is required.
                                            Asset system is not functioning as originally designed).
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: rating5Color(1) }}>1</td>
                                        <td style={{ backgroundColor: rating5Color(1) }}>
                                            Critical/Failed
                                        </td>
                                        <td>Needs Immediate Closure and Repair</td>
                                    </tr>
                                </tbody>
                            </TableModal>
                        </div>
                    </Col>
                    <Col span={2} >
                    </Col>
                    <Col span={11} md={11} sm={24} xs={24} >
                        <div className="table-responsive">
                            <TableModal striped bordered hover className="cr-table">
                                <thead>
                                    <tr>
                                        <td colSpan={2}>
                                            Rating
                                        </td>
                                        <td>
                                            Description
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ backgroundColor: rating9Color(9) }}>9</td>
                                        <td style={{ backgroundColor: rating9Color(9) }}>
                                            New
                                        </td>
                                        <td>
                                            Newly completed / installed. No repairs necessary.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: rating9Color(8) }}>8</td>
                                        <td style={{ backgroundColor: rating9Color(8) }}>
                                            Excellent
                                        </td>
                                        <td>
                                            As “New” with no defects found. No repairs necessary.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: rating9Color(7) }}>7</td>
                                        <td style={{ backgroundColor: rating9Color(7) }}>
                                            Very Good
                                        </td>
                                        <td>
                                            Some minor signs of deterioration and defects found. No repairs necessary
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: rating9Color(6) }}>6</td>
                                        <td style={{ backgroundColor: rating9Color(6) }}>
                                            Good
                                        </td>
                                        <td>
                                            Minor isolated defects found. Monitor asset for further deterioration. There may be a
                                            possible need for preventative repairs at this time.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: rating9Color(5) }}>5</td>
                                        <td style={{ backgroundColor: rating9Color(5) }}>
                                            Average
                                        </td>
                                        <td>
                                            Minor, moderated and isolated defects are present but with no significant section loss.
                                            Minor repairs required but element is functioning as originally designed
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: rating9Color(4) }}>4</td>
                                        <td style={{ backgroundColor: rating9Color(4) }}>
                                            Poor
                                        </td>
                                        <td> Moderate defects are present. Moderate repairs are required and asset is not functioning
                                            as originally designed.</td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: rating9Color(3) }}>3</td>
                                        <td style={{ backgroundColor: rating9Color(3) }}>
                                            Very Poor
                                        </td>
                                        <td> Major defects are present. Major repairs required and asset is not functioning as originally
                                            designed.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: rating9Color(2) }}>2</td>
                                        <td style={{ backgroundColor: rating9Color(2) }}>
                                            Critical
                                        </td>
                                        <td>

                                            Critical Immediate closure required. Study should be performed to determine the feasibility of
                                            repairing/replacing the asset.
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style={{ backgroundColor: rating9Color(1) }}>1</td>
                                        <td style={{ backgroundColor: rating9Color(1) }}>
                                            Failed
                                        </td>
                                        <td> Asset is unsafe/Failed and beyond repair</td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: rating9Color(0) }}>N/A</td>
                                        <td style={{ backgroundColor: rating9Color(0) }}>
                                            Non-Applicable
                                        </td>
                                        <td>
                                            Either the asset or all failure modes are non-applicable
                                        </td>
                                    </tr>

                                </tbody>
                            </TableModal>
                        </div>
                    </Col>
                </Row>
            </Content>
        </Fragment>

    )

}
export default Rating;