import React, {Component} from 'react';
import {Form, Select, Button, Checkbox, Switch, Radio, Row, Slider} from 'antd';
import './Start.css';

const {Option} = Select;

const formItemLayout = {
  labelCol: {
    xs: {span: 24},
    sm: {span: 8},
  },
  wrapperCol: {
    xs: {span: 24},
    sm: {span: 16},
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const config = {
  type: [
    {id: 'basic', text: '加减法'},
    {id: 'advanced', text: '乘法口诀'}
  ],
  scope: [
    {id: '20', text: '20以内'},
    {id: '50', text: '50以内'},
    {id: '100', text: '100以内'}
  ],
  number: {
    defaultValue: 10,
    max: 50,
    step: 5
  },
  output: [
    {id: 'oral', text: '口算练习'},
    {id: 'print', text: '笔算打印'}
  ]
};

export default class Start extends Component {
  render() {
    return (
      <Form className="start-form" {...formItemLayout}>
        <Form.Item label="类型">
          <Select placeholder="选择类型" defaultValue={config.type[0].id} style={{width: '50%'}}>
            {
              config.type.map(type =>
                <Option key={type.id} value={type.id}>{type.text}</Option>
              )
            }
          </Select>
        </Form.Item>

        <Form.Item label="范围">
          <Radio.Group defaultValue={config.scope[0].id} buttonStyle="solid">
            {
              config.scope.map(scope =>
                <Radio.Button key={scope.id} value={scope.id}>{scope.text}</Radio.Button>
              )
            }
          </Radio.Group>
        </Form.Item>

        <Form.Item label="运算">
          <Checkbox.Group defaultValue={['plus', 'minus']}>
            <Row>
              <Checkbox value="plus">加法</Checkbox>
              <Checkbox value="minus">减法</Checkbox>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item label="进退位">
          <Switch defaultChecked onChange=""/>
        </Form.Item>

        <Form.Item label="题数">
          <Slider {...config.number} tooltipVisible={true} style={{width: '50%'}}/>
        </Form.Item>

        <Form.Item label="输出类型">
          <Select defaultValue={config.output[0].id} style={{width: '50%'}}>
            {
              config.output.map(output =>
                <Option key={output.id} value={output.id}>{output.text}</Option>
              )
            }
          </Select>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            开始
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
