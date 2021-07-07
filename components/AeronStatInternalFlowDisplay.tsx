/*
 * Copyright 2020-2021 Shaun Laurens
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

import { AeronStatInternalFlow } from "../lib/aeronStatTypes";
import AeronStatChannelDisplay from "./AeronStatChannelDisplay";

type Props = {
  flows: AeronStatInternalFlow[];
};

 
const AeronStatInternalFlowDisplay: React.FC<Props> = ({ flows }: Props) => {
  return (
    <>
      <div className="py-2 px-6 bg-yellow-100">
       <span>Internal Flows - {flows.length}</span>
      </div>
      
      <div className="grid grid-cols-9 px-6 bg-yellow-50">
        <span className="pt-1 pr-2 text-xs text-gray-500 font-bold col-span-3 break-all">Channel</span>
        <span className="pt-1 pr-2 text-xs text-gray-500 bg-blue-50 font-bold text-right">Session</span>
        <span className="pt-1 pr-2 text-xs text-gray-500 font-bold text-right">Stream ID</span>
        <span className="pt-1 pr-2 text-xs text-gray-500 bg-blue-50 font-bold text-right">Pub Pos</span>
        <span className="pt-1 pr-2 text-xs text-gray-500 font-bold text-right">Sub Pos</span>
        <span className="pt-1 pr-2 text-xs text-gray-500 bg-blue-50 font-bold text-right">Difference</span>
        <span className="pt-1 pr-2 text-xs text-gray-500 font-bold text-right">Back Pressure Events</span>
      </div>

      {flows.map((flow) => (
        <div key={flow.sessionId} className="grid grid-cols-9 px-6">
          <span className="pt-2 pb-2 pr-2 text-xs text-gray-900  col-span-3 break-all font-code"><AeronStatChannelDisplay channelData={flow.channelParsed}/></span>
          <span className="pt-2 pb-2 pr-2 pl-2 text-xs text-gray-900 font-code bg-blue-50 text-right">{flow.sessionId}</span>
          <span className="pt-2 pb-2 pr-2 pl-2 text-xs text-gray-900 font-code text-right">{flow.streamId}</span>
          <span className="pt-2 pb-2 pr-2 pl-2 text-xs text-gray-900 font-code bg-blue-50 text-right">{flow.pubPositionSampled}</span>
          <span className="pt-2 pb-2 pr-2 pl-2 text-xs text-gray-900 font-code text-right">{flow.subPosition}</span>
          <span className="pt-2 pb-2 pr-2 pl-2 text-xs text-gray-900 font-code bg-blue-50 text-right">{flow.diff}</span>
          <span className="pt-2 pb-2 pr-2 pl-2 text-xs text-gray-900 font-code text-right">{flow.sendBackPressureEvents}</span>
        </div>
      ))}

    </>
  );
};
  
export default AeronStatInternalFlowDisplay;
  