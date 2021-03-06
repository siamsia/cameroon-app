/**
 * Created by Cyberhan123 on 18/10/19.
 * topic(画题)模块子路由
 */
import CommonFooter from '@/components/common/CommonFooter.vue'
import TopicHeader from '@/components/topic/TopicHeader.vue'
import TopicComment from '@/views/topic/Comment.vue'
import fellow from '@/views/topic/Fellow(glx).vue';
import recommend from '@/views/topic/Recommend.vue';
import hotlist from '@/views/topic/HotList.vue';
import alists from '@/views/topic/ArticleLists.vue';
import putquestion from '@/views/topic/PutQuestion.vue';
//import answer from '@/views/topic/Answer.vue';
import article from '@/views/topic/Article.vue';
//import ArticleFooter from '@/components/topic/ArticleFooter.vue';


export default [
    {
        path: 'fellow',
        components:
            {
                header: ()=>import('@/components/topic/TopicHeader.vue'),
                default: ()=>import('@/views/topic/Fellow(glx).vue'),
                footer:()=>import('@/components/topic/TopicHeader.vue')
            },
        name: 'fellow'
    },
    {
        path: 'recommend',
        components: {
            header: TopicHeader,
            footer: CommonFooter,
            default: recommend,

        },
        name: 'recommend'
    },
    {
        path: 'hotlist',
        components: {
            header: TopicHeader,
            footer: CommonFooter,
            default: hotlist
        },
        name: 'hotlist'
    },
    {
        path: 'alists',
        components: {
            header: TopicHeader,
            footer: CommonFooter,
            default: alists
        },
        name: 'alists'
    },
    {
        path: 'article',
        components: {
            header: TopicHeader,
            footer: CommonFooter,
            default: article
        },
        name: 'article'
    },
    {
        path: 'comment',
        component: TopicComment,
    },
    {
        path: 'putquestion',
        component: putquestion,
        name: 'qutquestion'
    },
]

