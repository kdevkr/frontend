import { defineBoot } from '#q-app/wrappers';

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import customParseFormat from "dayjs/plugin/customParseFormat";
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ko'

export default defineBoot(({ app }) => {
    dayjs.extend(utc)
    dayjs.extend(timezone)
    dayjs.extend(customParseFormat);
    dayjs.extend(relativeTime);

    dayjs.tz.setDefault('Asia/Seoul')
    dayjs.locale('ko')

    app.config.globalProperties.$dayjs = dayjs
})
