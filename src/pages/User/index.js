import {
  Breadcrumb,
  Col,
  Form,
  Input,
  Popconfirm,
  Row,
  Skeleton,
  Select,
} from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ButtonComp,
  CardHeader,
  Gap,
  ModalComp,
  TableComp,
} from "../../components";

import "./style.less";
const { TextArea } = Input;
const { Option } = Select;
const User = () => {
  const { globalReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  // Column Header Table
  const columns = [
    {
      title: "Plat No",
      dataIndex: "area_name",
    },
    {
      title: "Car",
      dataIndex: "car_type",
    },
    {
      title: "Name",
      dataIndex: "username",
    },
    {
      title: "Area",
      dataIndex: "area_name",
    },
    {
      title: "Access Menu",
      dataIndex: "",
    },

    {
      title: "Action",
      key: "action",
      //   render: (_, record) =>
      //     areaReducer.area.length >= 1 ? (
      //       <Popconfirm
      //         title="Sure to edit?"
      //         onConfirm={() => handleEdit(record.id)}>
      //         <a>Edit</a>
      //       </Popconfirm>
      //     ) : null,
    },
  ];

  return (
    <>
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>User</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 360,
        }}>
        {/* Title */}
        <Row>
          <Col span={12} order={4}>
            <h1>Master User</h1>
          </Col>
        </Row>
        <Gap height={"30px"} />
        {/* Card Header */}
        <CardHeader
          icon={"fluent:add-12-regular"}
          nameBtn={"Create New"}
          onClickBtn={() => dispatch({ type: "SET_MODAL", value: true })}
        />
        <Gap height={"40px"} />
        {/* Table */}
        <Row>
          <Col span={24} order={4}>
            {globalReducer.isLoading ? (
              <>
                {columns.map((index) => (
                  <>
                    <Skeleton.Input
                      active
                      style={{ width: "100%" }}
                      size="default"
                      block={true}
                    />
                    <Gap height={"10px"} />
                  </>
                ))}
              </>
            ) : (
              <TableComp columns={columns} />
            )}
          </Col>
        </Row>
      </div>
      <ModalComp
        title="Create User"
        show={globalReducer.isModal}
        onClose={() => dispatch({ type: "SET_MODAL", value: false })}
        content={bodyModal(dispatch)}
        widthModal="60%"
      />
    </>
  );
};

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

// Comp Modal Create
const bodyModal = (dispatch) => (
  <>
    <div className="content-wrapper-2">
      <Form layout="vertical">
        <Row>
          <Col span={10}>
            <Form.Item label="First Name *">
              <Input placeholder="First Name" />
            </Form.Item>
          </Col>
          <Gap width="80px" />
          <Col span={10}>
            <Form.Item label="Last Name *">
              <Input placeholder="Last Name" />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item label="Phone No *">
              <Input placeholder="First Name" />
            </Form.Item>
          </Col>
          <Gap width="80px" />
          <Col span={10}>
            <Form.Item label="Address">
              <TextArea rows={4} placeholder="Address" />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item label="Area *">
              <Input placeholder="Area" />
            </Form.Item>
          </Col>
          <Gap width="80px" />
          <Col span={10}></Col>
          <Col span={10}>
            <Form.Item label="User Name *">
              <Input placeholder="User Name..." />
            </Form.Item>
          </Col>
          <Gap width="80px" />
          <Col span={10}>
            <Form.Item label="Department *">
              <Input placeholder="Department..." />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item label="Car *">
              <Input placeholder="Car..." />
            </Form.Item>
          </Col>
          <Gap width="80px" />
          <Col span={10}>
            <Form.Item label="Pribadi/Umum *">
              <select className="form-input-select-filter">
                <option value=" ">Pribadi/Umum</option>
                <option value="pribadi">Pribadi</option>
                <option value="umum">Umum</option>
              </select>
            </Form.Item>
          </Col>
        </Row>
        <Gap height={"20px"} />
        <Row>
          <Col span={24}>
            <h1>Menu Choose</h1>
            <hr />
            <Gap height={"10px"} />
          </Col>
          <Col span={15}>
            <div className="wrapper-checkbox">
              <div class="inputGroup">
                <input id="option1" name="option1" type="checkbox" />
                <label for="option1">Dashboard</label>
              </div>
              <div class="inputGroup">
                <input id="option2" name="option2" type="checkbox" />
                <label for="option2">M.User</label>
              </div>
              <div class="inputGroup">
                <input id="option3" name="option3" type="checkbox" />
                <label for="option3">M.Car</label>
              </div>
              <div class="inputGroup">
                <input id="option4" name="option4" type="checkbox" />
                <label for="option4">M.Car</label>
              </div>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
    <Gap height={"80px"} />
    <div className="button-wrapper-2">
      <ButtonComp
        btnstyle="btn-danger"
        name="Cancel"
        style={{ width: "15%" }}
        onClickBtn={() => dispatch({ type: "SET_MODAL", value: false })}
      />
      <Gap width={"20px"} />
      <ButtonComp name="Submit" style={{ width: "15%" }} />
      <Gap width={"20px"} />
    </div>
  </>
);

export default User;
