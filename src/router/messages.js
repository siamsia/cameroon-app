/**
 * Created by apple on 18/10/11.
 * message(消息)模块子路由
 */
import OpenSubScription_content from '../views/message/ChildrenPages/subScription/openSubScription_content';
import OpenSubScription_message from '../views/message/ChildrenPages/subScription/openSubScription_message';
import SubScription_content from '../views/message/ChildrenPages/subScription/subScription_content';
import SubScription_message from '../views/message/ChildrenPages/subScription/subScription_message';
import Withme from '@/views/message/Withme.vue';
export default [
    {path:'openSubScription_content',component:OpenSubScription_content},
    {path:'openSubScription_message',component:OpenSubScription_message},
    {path:'subScription_content',component:SubScription_content},
    {path:'subScription_message',component:SubScription_message},
    {path:'withme',component:Withme}
]