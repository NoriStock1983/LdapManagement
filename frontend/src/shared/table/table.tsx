import { forwardRef } from "react";
import "../shared.css";
import "./table.css";

interface tableprops {
    label: string;
    classname?: string;
    tableheader: string[];
    tabledetail: string[][];
  }
const Tables = forwardRef<HTMLButtonElement,tableprops>(function Tables(
    props,
    ref
    ) {
    return (
        <div className={props.classname}>
            <table>
                <tr>
                    <th>#</th>
                    <th>社員番号</th>
                    <th>社員名</th>
                    <th>会社コード</th>
                    <th>部署コード</th>
                    <th>役職</th>
                    <th>入社日</th>
                    <th>退職日</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>0001</td>
                    <td>山田太郎</td>
                    <td>0001</td>
                    <td>001</td>
                    <td>部長</td>
                    <td>2021/01/01</td>
                    <td>2021/12/31</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>0002</td>
                    <td>田中次郎</td>
                    <td>0001</td>
                    <td>002</td>
                    <td>課長</td>
                    <td>2021/01/01</td>
                    <td>2021/12/31</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>0003</td>
                    <td>佐藤三郎</td>
                    <td>0002</td>
                    <td>003</td>
                    <td>係長</td>
                    <td>2021/01/01</td>
                    <td>2021/12/31</td>
                </tr>
            </table>
        </div>
    );
    });

    export default Tables;