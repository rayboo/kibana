/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { connect } from 'react-redux';
import { IReduxState } from '../../../store/rootReducer';
import { getUrlParams } from '../../../store/urlParams';
import { TransactionDetailsView } from './view';

function mapStateToProps(state = {} as IReduxState) {
  return {
    location: state.location,
    urlParams: getUrlParams(state)
  };
}

export const TransactionDetails = connect(mapStateToProps)(
  TransactionDetailsView
);
