let table = `<table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Fullname</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Khoa</td>
                        <td>Male</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Thành</td>
                        <td>Male</td>
                    </tr>
                </tbody>
            </table>`;
// document.write(table);
document.getElementById("tb").innerHTML = table
// let i = 1;

// while (i < 100) {
//     //phân thân vòng lặp
//     // document.write("<hr width = " + i + "%>");
//     document.write(`<hr width = ${i}%>`);
//     i++;
// }