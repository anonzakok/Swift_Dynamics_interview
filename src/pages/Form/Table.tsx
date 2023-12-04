/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from "react";
import { Button, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useTranslation } from "react-i18next";
import { IDataList } from "shared/modules/form";

interface TableDataListProps {
  dataList: IDataList[];
  isTableLoading: boolean;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onDeleteMultiple: (id: string[]) => void;
}

const TableDataList: FC<TableDataListProps> = ({
  dataList,
  isTableLoading = false,
  onEdit,
  onDelete,
  onDeleteMultiple,
}) => {
  const { t } = useTranslation("form");
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);

  const columns: ColumnsType<any> = [
    {
      title: t("form.table.name"),
      dataIndex: "full_name",
      sorter: (a, b) => a.full_name.localeCompare(b.full_name),
    },
    {
      title: t("form.table.gender"),
      dataIndex: "gender_text",
      sorter: (a, b) => a.gender_text.localeCompare(b.gender_text),
    },
    {
      title: t("form.table.phone"),
      dataIndex: "phone",
      sorter: (a, b) => a.phone.localeCompare(b.phone),
    },
    {
      title: t("form.table.nationality"),
      dataIndex: "nationality_text",
      sorter: (a, b) => a.nationality_text.localeCompare(b.nationality_text),
    },
    {
      title: t("form.table.action.title"),
      dataIndex: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => onEdit(record.key)}>
            {t("form.table.action.edit")}{" "}
          </a>
          <a onClick={() => onDelete(record.key)}>
            {t("form.table.action.delete")}
          </a>
        </Space>
      ),
    },
  ];

  const onSelectChange = (newSelectedRowKeys: any[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div style={{ width: "100%" }}>
      <div style={{ marginBottom: 16 }}>
        <Button
          onClick={() => onDeleteMultiple(selectedRowKeys)}
          disabled={!hasSelected}
          loading={isTableLoading}
        >
          {t("form.table.action.delete")}
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      <Table
        rowSelection={rowSelection}
        pagination={{ pageSize: 3 }}
        columns={columns}
        dataSource={dataList}
      />
    </div>
  );
};

export default TableDataList;
