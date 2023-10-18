'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { PencilIcon, UserPlusIcon } from '@heroicons/react/24/solid';
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  IconButton,
  Tooltip,
} from '@material-tailwind/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

// tabs mock data
// id:<string>
// wordlist:<set>
// status:<String>: "tobetranslated" "sucess" "failed " could I use numbers for the status?
// Timestamp
// const TABS = [
//   {
//     label: 'All',
//     value: 'all',
//   },
//   {
//     label: 'translated',
//     value: 'unTranslated',
//   },
//   {
//     label: 'Not Translated',
//     value: 'unTranslated',
//   },
// ];
// const tableRows = [
//   {
//     TaskID: '1',
//     wordList: [
//       'course',
//       'student',
//       'room',
//       'animals',
//       'food',
//       'computer',
//       'local',
//       'presentation',
//       'term',
//       'check',
//       'family',
//     ],
//     status: 'success',
//     timeStamp: '1697218407',
//   },
//   {
//     TaskID: '2',
//     wordList: ['Avatar', 'stamp', 'layout', 'coffee machine', 'piano', 'computer', 'cat'],
//     status: 'tobeTranslated',
//     timeStamp: '169721802',
//   },
//   {
//     TaskID: '3',
//     wordList: [
//       'cupboard',
//       'student',
//       'room',
//       'animals',
//       'food',
//       'computer',
//       'local',
//       'presentation',
//       'term',
//       'check',
//       'family',
//     ],
//     status: 'failed',
//     timeStamp: '1697218403',
//   },
// ];

export default function main() {
  const [tableRows, setTableRows] = useState([]);
  const TABLE_HEAD = ['Id', 'Word List', 'Status', 'TimeStamp'];

  const getTableRows = async () => {
    axios
      .get('http://localhost:3000/api/listAnecdote')
      .then((response) => {
        setTableRows(response.data.Items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //https://medium.com/geekculture/react-uncaught-typeerror-destroy-is-not-a-function-192738a6e79b
  //for sync and async functions, arrow functions for useEffect
  //future study
  useEffect(() => getTableRows, []);

  return (
    <>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Table list
              </Typography>
              {/* <Typography color="gray" className="mt-1 font-normal">
              See information about all members
            </Typography> */}
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outlined" size="sm">
                view all
              </Button>
              <Button className="flex items-center gap-3" size="sm">
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add word list
              </Button>
            </div>
          </div>

          {/* tabs */}
          {/* <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
          </div>
        </div> */}
        </CardHeader>

        {/* the table */}
        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map(({ TaskId, wordList, status, timeStamp }, index) => {
                const isLast = index === tableRows.length - 1;
                const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

                return (
                  <tr key={TaskId}>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {TaskId}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {wordList.map((x) => (
                          <span>{x}, </span>
                        ))}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {status}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {timeStamp}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
        {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter> */}
      </Card>
    </>
  );
}
