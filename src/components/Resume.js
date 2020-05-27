import React from 'react';


class Resume extends React.Component {
    render() {
        return(
            <div>
            <h2>Hieu's Resume</h2> 
            <table>
                <colgroup>
                    <col id="firstCol" />
                    <col id="secondCol" />
                </colgroup>
                <thead>
                    <tr>
                        <th class="personalInfo">Full Name: </th>
                        <th>Nguyen Vo Van Hieu</th>
                    </tr>
                    <tr>
                        <th class="personalInfo">Email: </th>
                        <th><a id="email" href="mailto: hieuvanvok39@gmail.com">hieuvanvok38@gmail.com</a></th>
                    </tr>
                    <tr>
                        <th class="personalInfo">Mobile: </th>
                        <th>Available Upon Request</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="sections" colspan="2">Education Background</th>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <b>Nova Scotia Community College, Halifax, NS</b><br />
                            Diploma in IT Data Analytics (2018 ~ 2020)<br />
                            Understand data visualization and analysis with comprehension of ultilising optimized tools from statistical learning, data transactional programming and object – oriented programming language courses.<br />
                            <strong>Comprehends how to analyze data</strong> to improve efficiency in business aspects.
                            <ul>
                                <li>Develop knowledge on how to create extra value from gathered information</li>
                                <li>Learn the concept of database management systems to discover and analyze large datasets from complex environment by acquiring how to gather the raw dataset and to manipulate it to create value,</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th class="sections" colspan="2">Technical Skills</th>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <ul>
                                <li>Basic skills with R, Python, Java, SQL, C, Linux, JavaScript, HTML, CSS</li>
                                <li>Business Software: Visual Paradigm, Visio, ERP</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th class="sections" colspan="2">Work Experience</th>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <strong>Site Accounting</strong> in BCA-Thang Long Co., Ltd. (2016 ~ 2017)<br />
                            <ul>
                                <li>Assist managing company’s asset (furniture, equipment) on site.</li>
                                <li>Assisted in interpreting and collaborating works between Singapore expert and Vietnamese engineers.</li>
                                <li>Prepare document which relevant to site work.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <strong>Accounting</strong> in Think Design Trading Service and Construction Consultant JSC (2015 ~ 2016)<br />
                            Foreseeing the organizational structure, working procedures and management methods. Assist chief accountant to issue financial statements: trial balance, balance sheet, income statement, cash flow.<br />
                            <ul>
                                <li>Daily book-keeping: record revenue/expense, make receipt vouchers/payment vouchers.</li>
                                <li>Issued VAT invoices for customers, follow up invoices, chase debits to ensure to get payment on time.</li>                                        
                                <li>Get invoices from vendors, compare with contract, process payment accordingly.</li>                                        
                                <li>Prepare VAT input, output statement and submit online to Tax department</li>                                        
                                <li>Follow up AR/AP, prepare ledge.</li>                                        
                                <li>Filling all document carefully.</li>                                        
                                <li>Set up bank transfer online in the country, compare cash book with bank statement.</li>                                        
                                <li>Follow up origin and depreciation utilizing, prepaid expense.</li>                                        
                                <li>Prepare insurance’s documents for new/leaving employees: report increase/decrease, close social insurant books and labor report.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <strong>Accountant intern</strong> in Tri Hung Viet Co. Ltd. (2015)<br />
                            Approach to accounting software, Excel in practice
                            <ul>
                                <li>Completing tasks relevant ordering, storing accounting vouchers logically. Properly implement other office transactions.</li>
                                <li>Having knowledge of accounting processes of companies in the business of commercial goods.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th class="sections" colspan="2">Activities</th>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <ul>
                                <li>Participant at seminars related to accounting field.</li>
                                <li>Participant at academic contest annual and activities for students.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th class="sections" colspan="2">Personal Quality</th>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <ul>
                                <li>Diligent, self-motivated, integrity and ethic.</li>
                                <li>Reading comprehensive and communication English</li>
                                <li>Having sense of responsibility, work well independently, and carefulness in all the work done</li>
                                <li>I’m a patient person, and get on easily with people of all ages and background.</li>
                                <li>Keen to learn and quick learner</li>
                                <li>Self – learning accounting and auditing standard, tax, accounting software.</li>
                                <li>Work under pressure</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th class="sections" colspan="2">Skill</th>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <ul>
                                <li>Input data quickly and accurately</li>
                                <li>Analytical thinking and problems solving skills.</li>                                        
                                <li>Good command of Microsoft Word, Excel, Power Point, Accounting software.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th class="sections" colspan="2">Interest</th>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <ul>
                                <li>Reading book, newspaper.</li>
                                <li>Watch foreign film on Star movies.</li>                                        
                                <li>Volunteer Activities NSCC Group Volunteers: Feed Nova Scotia, Warehouse Assistant</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
            
        )
    }
}

export default Resume;