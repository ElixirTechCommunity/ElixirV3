import React from "react";
import { ManagementSectionProps, Column } from "../types";
import { managementStyles } from "../styles";

interface ExtendedManagementSectionProps extends ManagementSectionProps {
  onRowClick?: (row: any) => void;
}

const ManagementSection: React.FC<ExtendedManagementSectionProps> = ({
  title,
  columns,
  data = [],
  onViewAll,
  className = "",
  onRowClick,
}) => {
  return (
    <div className={`${managementStyles.container} ${className}`}>
      <div className={managementStyles.header}>
        <h2 className={managementStyles.title}>{title}</h2>
        {onViewAll && (
          <button onClick={onViewAll} className={managementStyles.viewAll}>
            View All
          </button>
        )}
      </div>
      <div className={managementStyles.table.container}>
        <table className={managementStyles.table.table}>
          <thead>
            <tr className={managementStyles.table.header}>
              {columns.map((column: Column, index: number) => (
                <th key={index} className={managementStyles.table.headerCell}>
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={managementStyles.table.row}
                onClick={onRowClick ? () => onRowClick(row) : undefined}
              >
                {columns.map((column: Column, colIndex: number) => (
                  <td key={colIndex} className={managementStyles.table.cell}>
                    {column.accessor(row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagementSection;
