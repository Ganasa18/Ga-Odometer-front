import {
  Breadcrumb,
  Col,
  Form,
  Input,
  Layout,
  Popconfirm,
  Row,
  Select,
  Skeleton,
} from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ButtonComp,
  CardHeader,
  Gap,
  ModalComp,
  SelectSearchComp,
  TableComp,
} from "../../components";
import {
  createDepartement,
  editDepartement,
  getDataDepartement,
} from "../../redux/action";
import "./style.less";

const Departement = () => {
  const [optionArea, setOptionArea] = useState([]);
  const [departement, setDepartement] = useState([]);
  const { globalReducer, departementReducer, areaReducer } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  const areaData = areaReducer.area;
  const valueDepartement = departementReducer.areaCreate;
  const valueSelected = globalReducer.selectedValue;

  const handleAreaData = () => {
    const newArr = areaData.map((item) => ({
      value: item.id,
      label: item.area_name,
    }));
    setOptionArea(newArr);
  };

  // Column Header Table
  const columns = [
    {
      title: "Area",
      dataIndex: "area_name",
      width: "40%",
    },
    {
      title: "Departement",
      dataIndex: "departement_name",
      width: "40%",
    },
    {
      title: "Action",
      key: "action",
      width: "20%",
      render: (_, record) =>
        departementReducer.departement.length >= 1 ? (
          <Popconfirm
            title="Sure to edit?"
            onConfirm={() => handleEdit(record.id)}>
            <a>Edit</a>
          </Popconfirm>
        ) : null,
    },
  ];

  // Edit Modal
  const handleEdit = (key) => {
    const newData = departementReducer.departement.filter(
      (item) => item.id === key
    );
    setDepartement(newData);
    dispatch({
      type: "SET_DEPARTEMENT_ADD",
      value: newData[0].departement_name,
    });
    dispatch({ type: "SET_MODAL_EDIT", value: true });

    const data = {
      label: newData[0].area_name,
      value: newData[0].area_pk,
    };

    dispatch({ type: "SET_SELECTED", value: data });
  };

  useEffect(() => {
    dispatch(getDataDepartement());
    handleAreaData();
  }, []);

  return (
    <>
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>Departement</Breadcrumb.Item>
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
            <h1>Master Departement</h1>
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
              <TableComp
                data={departementReducer.departement}
                columns={columns}
              />
            )}
          </Col>
        </Row>
      </div>
      <ModalComp
        title="Create Master Departement"
        show={globalReducer.isModal}
        onClose={() => dispatch({ type: "SET_MODAL", value: false })}
        content={bodyModal(
          dispatch,
          optionArea,
          valueDepartement,
          valueSelected,
          departement
        )}
        widthModal="40%"
      />
      <ModalComp
        title="Edit Master Departement"
        show={globalReducer.isModalEdit}
        onClose={() => dispatch({ type: "SET_MODAL_EDIT", value: false })}
        content={bodyModalEdit(
          dispatch,
          optionArea,
          valueDepartement,
          valueSelected,
          departement
        )}
        widthModal="40%"
      />
    </>
  );
};

// Comp Modal Create
const bodyModal = (dispatch, optionArea, valueDepartement, valueSelected) => (
  <>
    <div className="content-wrapper">
      <Form layout="vertical">
        <Form.Item label="Area" required>
          <SelectSearchComp option={optionArea} />
        </Form.Item>
        <Gap height={"28px"} />
        <Form.Item label="Departement" required>
          <Input
            placeholder="Departement Name"
            onChange={(e) =>
              dispatch({ type: "SET_DEPARTEMENT_ADD", value: e.target.value })
            }
          />
        </Form.Item>
        <Gap height={"80px"} />
        <div className="button-wrapper">
          <ButtonComp
            btnstyle="btn-danger"
            name="Cancel"
            style={{ width: "30%" }}
            onClickBtn={() => dispatch({ type: "SET_MODAL", value: false })}
          />
          <Gap width={"80px"} />
          <ButtonComp
            name="Submit"
            style={{ width: "30%" }}
            onClickBtn={() =>
              dispatch(createDepartement(valueDepartement, valueSelected))
            }
          />
        </div>
      </Form>
    </div>
  </>
);

// Comp Modal Edit
const bodyModalEdit = (
  dispatch,
  optionArea,
  valueDepartement,
  valueSelected,
  departement
) => (
  <>
    <div className="content-wrapper">
      <Form layout="vertical">
        <Form.Item label="Area" required>
          <SelectSearchComp option={optionArea} />
        </Form.Item>
        <Gap height={"28px"} />
        <Form.Item label="Departement" required>
          <Input
            placeholder="Departement Name"
            value={valueDepartement}
            onChange={(e) =>
              dispatch({ type: "SET_DEPARTEMENT_ADD", value: e.target.value })
            }
          />
        </Form.Item>
        <Gap height={"80px"} />
        <div className="button-wrapper">
          <ButtonComp
            btnstyle="btn-danger"
            name="Cancel"
            style={{ width: "30%" }}
            onClickBtn={() =>
              dispatch({ type: "SET_MODAL_EDIT", value: false })
            }
          />
          <Gap width={"80px"} />
          <ButtonComp
            name="Edit"
            style={{ width: "30%" }}
            onClickBtn={() =>
              dispatch(
                editDepartement(
                  valueDepartement,
                  valueSelected,
                  departement[0].id
                )
              )
            }
          />
        </div>
      </Form>
    </div>
  </>
);

export default Departement;
