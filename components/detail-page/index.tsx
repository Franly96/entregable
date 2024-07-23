
'use client'
import React from "react";
import { BsGrid3X3 } from "react-icons/bs";
import { PiWarningCircle } from "react-icons/pi";
import Chart from "../charts/ChartsSelector";
import { data, options } from "../DataSection/dummyChartsData";

const DetailPage = () => {
  const [selectedQuestionId, setSelectedQuestionId] = React.useState<
    number | undefined
  >();
  const onClickSelectedQuestion = React.useCallback((index: number) => {
    setSelectedQuestionId(index);
  }, []);
  return (
    <>
      <div className="container max-w-sm sm:max-w-md md:max-w-lg  lg:max-w-xl xl:max-w-2xl py-6 flex flex-col gap-8">
        <div className="flex justify-end items-center px-4 pt-4">
        </div>
        <div className="p-4">
          <div className="text-center mb-4">
            <div className="flex justify-center mb-4">
              <div className="flex p-5 bg-gray-200 rounded-lg items-center justify-center">
                <BsGrid3X3 className="text-xl" size={32} />
              </div>
            </div>
            <div className="flex flex-row justify-center ml-8 items-center">
              <h2 className="text-4xl font-semibold px-2">INTES</h2>
              <span className="rounded-lg bg-gray-200 px-2 py-1 text-sm h-max text-gray-400">
                Layout
              </span>
            </div>
            <p className="text-gray-500 mb-5">Descriptive name of the Layout</p>
            <p className="text-gray-600 mb-4">
              Those options are already baked in with this model shoot me an email
              clear blue water but we need distributors to evangelize the new line
              to local markets.
            </p>
            <div className="flex justify-center space-x-2 mb-4">
              {['#comms', '#coverage', '#stakeholders'].map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-600 rounded-md px-3 py-1 text-sm border-2 border-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex text-center my-10">
            {[
              {
                title: '2485',
                subtitle: (
                  <>
                    Used <PiWarningCircle className="ml-1" />
                  </>
                ),
              },
              { title: 'Universal', subtitle: 'Type' },
              {
                title: '6',
                subtitle: (
                  <>
                    Pages No.
                    <PiWarningCircle className="ml-1" />
                  </>
                ),
              },
              { title: '07/23/2024', subtitle: 'Last Updated' },
            ].map((item, key) => (
              <div
                key={key}
                className={`grow ${key != 3 && 'border-r-2 border-gray-200'}`}
              >
                <div className="text-gray-900 text-xl font-semibold">
                  {item.title}
                </div>
                <div className="flex flex-direction-row text-center justify-center items-center text-gray-500">
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>
          <Chart key="line" type='Line' options={options} data={data} />
          <h3 className="text-2xl font-semibold mb-4">Business Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className={`${selectedQuestionId === index ? 'bg-gray-100' : 'bg-index'
                    } p-4 rounded-lg shadow-sm cursor-pointer border-0`}
                  onClick={() => onClickSelectedQuestion(index)}
                >
                  <h4 className="text-lg font-semibold mb-2">
                    Question {index + 1}
                  </h4>
                  <p className="text-gray-600">
                    Short description of the item goes nicely here.
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;