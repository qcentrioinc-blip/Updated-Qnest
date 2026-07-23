import React from 'react';
import { H3, P } from '../../../styles/Typography';

interface ColumnData {
  heading: string;
  text: string;
}

interface InfoColumnsProps {
  columns?: ColumnData[];
}

const defaultColumns: ColumnData[] = [
  {
    heading: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temre et dolore magna aliqua. defwr efw efref "
  },
  {
    heading: "Dolor sit amet",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. dewf few  "
  },
  {
    heading: "Consectetur",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. fewf fef fwe sdewf"
  }
];

const InfoColumns: React.FC<InfoColumnsProps> = ({ columns = defaultColumns }) => (
  <div className="bg-white w-full border border-gray-500">
    <div className="w-full grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-500">
      {columns.map((col, idx) => (
        <div key={idx} className="w-full flex flex-col items-center justify-start px-6 md:px-12 py-10 xl:py-20">
          
          <div className="w-full max-w-[320px] flex flex-col items-center">
            {/* Blue Square */}
            <div
              className="bg-[#00AA72] mb-5 shrink-0"
              style={{ width: "75px", height: "75px", borderRadius: "20px" }}
            />

            <H3 className="mb-4 text-center w-full">{col.heading}</H3>
            <P className="text-gray-600 text-base text-center w-full">{col.text}</P>
          </div>

        </div>
      ))}
    </div>
  </div>
);

export default InfoColumns;
