import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm} from 'antd';
import styles from './Users.css';
// import { PAGE_SIZE } from '../../constans';

function Users({ list: dataSource, total}) {
  return (
    <div className={styles.normal}>
      Route Component: Users
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Users);
