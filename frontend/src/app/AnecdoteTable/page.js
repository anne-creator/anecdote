'use client';
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
import { useRouter } from 'next/navigation';
import url from '../../../config.js';
import { useUser } from '@clerk/nextjs';

export default function main() {
  //auth
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const [tableRows, setTableRows] = useState([]);
  const TABLE_HEAD = ['Word List', 'Status', 'Story Link'];
  const router = useRouter();

  const getTableRows = async () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/api/AnecdoteTable`)
      .then((response) => {
        setTableRows(response.data.res.Items);
      })
      .catch((error) => {
        console.log(`fail to get table rows with error: ${error}`);
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
                Story Task History
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button
                onClick={() => router.push('/addItem')}
                className="flex items-center gap-3"
                size="sm"
              >
                Add Word List
              </Button>
            </div>
          </div>
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
              {tableRows?.map(({ TaskId, wordList, status, s3Url }, index) => {
                console.log(`this should only appear onces`);
                const isLast = index === tableRows.length - 1;
                const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

                return (
                  <tr key={TaskId}>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {typeof wordList === 'string' ? (
                          <span>{wordList}</span>
                        ) : (
                          wordList?.map((x, index) => <span key={index}>{x}, </span>)
                        )}
                        {/* {wordList?.map((x, index) => (
                          <span key={index}>{x}, </span>
                        ))} */}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {status}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {s3Url}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </>
  );
}
