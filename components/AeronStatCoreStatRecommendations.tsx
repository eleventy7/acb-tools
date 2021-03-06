/*
 * Copyright 2020-2022 Shaun Laurens
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { AeronStatRecommendation } from '../lib/aeronStatTypes';
import { InformationCircleIcon } from '@heroicons/react/outline';

type Props = {
  recs: AeronStatRecommendation[];
};

const AeronStatCoreStatRecommendations: React.FC<Props> = ({ recs }: Props) => {
  return (
    <>
      <div className="py-2 px-6 bg-yellow-100">
        <span>Recommendations</span>
      </div>
      <div className="flex px-6 py-6">
        <div className="flex-shrink-0">
          <InformationCircleIcon
            className="h-5 w-5 text-blue-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3 ">
          <h3 className="text-sm font-bold text-black">
            There were issues that require attention
          </h3>
          <div className="mt-2 text-sm text-black">
            <ol className="list-decimal pl-5 space-y-1">
              {recs.map((rec) => (
                <li key={rec.message}>{rec.message}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default AeronStatCoreStatRecommendations;
