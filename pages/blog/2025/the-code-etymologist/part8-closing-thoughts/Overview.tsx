import { LinkTo } from "../toc";

import styles from "./Overview.module.scss";

export function Overview() {
  return (
    <table className={styles.overview}>
      <thead>
        <tr>
          <th></th>
          <th>Write</th>
          <th>Draw</th>
          <th>Code</th>
          <th>Interact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            <LinkTo part={1}>Project setup</LinkTo>
          </th>
          <td>🆗</td>
          <td>-</td>
          <td>✅</td>
          <td>-</td>
        </tr>
        <tr>
          <th>
            <LinkTo part={2}>Coding guidelines</LinkTo>
          </th>
          <td>🆗</td>
          <td>-</td>
          <td>✅</td>
          <td>-</td>
        </tr>
        <tr>
          <th>
            <LinkTo part={3}>Development workflows</LinkTo>
          </th>
          <td>🆗</td>
          <td>✅</td>
          <td>✅</td>
          <td>-</td>
        </tr>
        <tr>
          <th>
            <LinkTo part={4}>Features</LinkTo>
          </th>
          <td>🆗</td>
          <td>🆗</td>
          <td>✅</td>
          <td>-</td>
        </tr>
        <tr>
          <th>
            <LinkTo part={5}>UI components library</LinkTo>
          </th>
          <td>-</td>
          <td>-</td>
          <td>🆗</td>
          <td>✅</td>
        </tr>
        <tr>
          <th>
            <LinkTo part={6}>Data structures</LinkTo>
          </th>
          <td>-</td>
          <td>-</td>
          <td>✅</td>
          <td>-</td>
        </tr>
        <tr>
          <th>
            <LinkTo part={7}>Technical decisions</LinkTo>
          </th>
          <td>🆗</td>
          <td>-</td>
          <td>✅</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  );
}
