import React from 'react';
import { API_ROOT } from '../../api-config';
import { withRouter } from 'react-router-dom';
import HighlightContainer from '../highlight/HighlightContainer';
import { Highlight } from '../highlight/Highlight';
import Model from '../Model'
import { truncateText } from '../DemoInput'
import WordCloud from 'react-d3-cloud';
import 'rc-tabs/dist/rc-tabs.css'
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import Gauge from 'react-svg-gauge';

const apiUrl = () => `${API_ROOT}/predict/language_detection`

const title = "Language Detection";


const description = (
  <span>
  </span>
)

const descriptionEllipsed = undefined

const fields = [
    {name: "text", type: "TEXT"}
]


const Output = ({ responseData }) => {
 const{result}=responseData
 return( <div> {result}</div>)
}



const examples = [
  ].map(sentence => ({sentence, snippet: truncateText(sentence)}))



const modelProps = {apiUrl, title, description, descriptionEllipsed,examples, fields, Output}

export default withRouter(props => <Model {...props} {...modelProps}/>)