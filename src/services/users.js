/**
 * Created by yupeng on 17/3/28.
 */
import request from '../utils/request';

export function fetch({page = 1}) {
  return request(`/api/users?_page=${page}&_limit=5`);
}
