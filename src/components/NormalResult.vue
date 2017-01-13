<template>
    <div>
        <div class="outer_table">
            <div class="outer_row">
            <div class="outer_cell">
                <div class="block">
                    <!--<div class="column" />
                    <div class="column" />
                    <div class="column" />
                    <div class="column" />
                    <div class="column" />
                    <div class="column" />
                    <div class="column" />
                    <div class="column" />
                    <div class="column" />
                    <div class="column" />
                    <div class="column" />
                    <div class="column" />
                    <div class="column" />
                    <div class="column" />-->
                    <div class="first_row">
                        <div class="first_cell">
                            <result-content :result="results? results[0]: 'tttt'"></result-content>
                        </div>
                        <div class="cell"><result-content :result="results? results[6]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[12]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[18]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[24]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[30]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[36]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[42]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[48]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[54]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[60]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[66]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[72]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[78]: 'tttt'"></div>

                        <!--<div class="first_row_ancestor_cell">
                            <div class="first_small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                            <div class="small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                        </div>
                        <div class="first_row_ancestor_cell">
                            <div class="first_small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                            <div class="small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                        </div>
                        <div class="first_row_ancestor_cell">
                            <div class="first_small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                            <div class="small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                        </div>
                        <div class="first_row_ancestor_cell">
                            <div class="first_small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                            <div class="small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                        </div>
                        <div class="first_row_ancestor_cell">
                            <div class="first_small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                            <div class="small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                        </div>
                        <div class="first_row_ancestor_cell">
                            <div class="first_small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                            <div class="small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                        </div>
                        <div class="first_row_ancestor_cell">
                            <div class="first_small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                            <div class="small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                        </div>
                        <div class="first_row_ancestor_cell">
                            <div class="first_small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                            <div class="small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                        </div>
                        <div class="first_row_ancestor_cell">
                            <div class="first_small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                            <div class="small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                        </div>
                        <div class="first_row_ancestor_cell">
                            <div class="first_small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                            <div class="small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                        </div>
                        <div class="first_row_ancestor_cell">
                            <div class="first_small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                            <div class="small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                        </div>
                        <div class="first_row_ancestor_cell">
                            <div class="first_small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                            <div class="small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                        </div>
                        <div class="first_row_ancestor_cell">
                            <div class="first_small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                            <div class="small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                        </div>
                        <div class="first_row_ancestor_cell">
                            <div class="first_small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                            <div class="small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                        </div>-->
                    </div>

                    <div class="row">
                        <div class="first_cell"><result-content :result="results? results[1]: 'tttt'"></result-content></div>
                        <div class="cell"><result-content :result="results? results[7]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[13]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[19]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[25]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[31]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[37]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[43]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[49]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[55]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[61]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[67]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[73]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[79]: 'tttt'"></div>

                        <!--<div class="ancestor_cell">
                            <div class="small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                            <div class="small_row">
                                <div class="cell"></div>
                                <div class="cell"></div>
                            </div>
                        </div>-->
                    </div>

                    <div class="row">
                        <div class="first_cell"><result-content :result="results? results[2]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[8]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[14]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[20]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[26]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[32]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[38]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[44]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[50]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[56]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[62]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[68]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[74]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[80]: 'tttt'"></div>
                    </div>
                    <div class="row">
                        <div class="first_cell"><result-content :result="results? results[3]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[9]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[15]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[21]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[27]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[33]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[39]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[45]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[51]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[57]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[63]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[69]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[75]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[81]: 'tttt'"></div>
                    </div>
                    <div class="row">
                        <div class="first_cell"><result-content :result="results? results[4]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[10]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[16]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[22]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[28]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[34]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[40]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[46]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[52]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[58]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[64]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[70]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[76]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[82]: 'tttt'"></div>
                    </div>
                    <div class="row">
                        <div class="first_cell"><result-content :result="results? results[5]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[11]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[17]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[23]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[29]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[35]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[41]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[47]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[53]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[59]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[65]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[71]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[77]: 'tttt'"></div>
                        <div class="cell"><result-content :result="results? results[83]: 'tttt'"></div>
                    </div>
                </div>
            </div>


            <!--<div class="outer_cell">
                <div class="block">
                    <div class="small_first_row">
                        <div class="cell">1</div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>

                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                    </div>
                    <div class="small_row">
                        <div class="cell">1</div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>

                        <div class="cell">1</div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                    </div>
                    <div class="small_row">
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>

                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                    </div>
                    <div class="small_row">
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>

                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                    </div>
                    <div class="small_row">
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>

                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                    </div>
                    <div class="small_row">
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>

                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                    </div>
                    <div class="small_row">
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>

                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                    </div>
                    <div class="small_row">
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>

                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                    </div>
                    <div class="small_row">
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>

                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                    </div>
                    <div class="small_row">
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>

                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                    </div>
                    <div class="small_row">
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>

                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                    </div>
                    <div class="small_row">
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>

                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                        <div class="cell"></div>
                    </div>
                </div>
            </div>-->

            </div>

        </div>
    </div>
</template>

<script>
// import {signalrEmitter} from '../constants/events'
// import * as commands from '../constants/commands'
import ResultContent from "./ResultContent"



export default {
  name: 'normal-result',
  data () {
    return {}
  },
  props: {
      results: Array
  },
  watch: {
      results: function(newVal){
        //   console.log("results changes rr=----------" + newVal.join("-"))
      }
  },
  components: {
      ResultContent
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
    .outer_table{
        display: table;
        table-layout: fixed;
    }
    .outer_row{
        display: table-row;
    }
    .outer_cell{
        display: table-cell;
    }

   .block {
        height: 120px;
        width: 280px;
        max-height: 120px;
        max-width: 280px;
        display: table;
        table-layout: fixed;
    }
    
    .first_row {
        display: table-row;
        height: 20px;
        max-height: 20px;
        min-height: 20px;
        overflow: hidden;
        width: 20px;
        max-width: 20px;
        min-width: 20px;
        text-overflow: ellipsis;
    }
    
    .row {
        display: table-row;
        height: 20px;
        max-height: 20px;
        min-height: 20px;
        overflow: hidden;
        width: 20px;
        max-width: 20px;
        min-width: 20px;
        overflow-y: hidden;
        text-overflow: ellipsis;
    }
    
    .column {
        display: table-column;
        width: 20px;
        max-width: 20px;
        min-width: 20px;
        height: 20px;
        max-height: 20px;
        min-height: 20px;
        overflow: hidden;
        overflow-y: hidden;
        text-overflow: ellipsis;
    }
    
    .first_row .first_cell {
        display: table-cell;
        border-style: solid;
        border-color: black;
        border-width: 1px;
        height: 20px;
        width: 20px;
        max-height: 20px;
        max-width: 20px;
        overflow: hidden;
        overflow-y: hidden;
        /*overflow: hidden;*/
        /*text-overflow: ellipsis;*/
        text-overflow: ellipsis;
    }
    
    .first_row .cell {
        display: table-cell;
        border-style: solid;
        border-color: black;
        border-width: 1px 1px 1px 0px;
        height: 20px;
        width: 20px;
        max-height: 20px;
        max-width: 20px;
        overflow: hidden;
        overflow-y: hidden;
        text-overflow: ellipsis;
    }
    
    .row .first_cell {
        display: table-cell;
        border-style: solid;
        border-color: black;
        border-width: 0px 1px 1px 1px;
        height: 20px;
        width: 20px;
        max-height: 20px;
        max-width: 20px;
        overflow: hidden;
        overflow-y: hidden;
        text-overflow: ellipsis;
    }
    
    .row .cell {
        display: table-cell;
        border-style: solid;
        border-color: black;
        border-width: 0px 1px 1px 0px;
        height: 20px;
        width: 20px;
        max-height: 20px;
        max-width: 20px;
        overflow: hidden;
        overflow-y: hidden;
        text-overflow: ellipsis;
    }

    .first_row_ancestor_cell {
        display: table-cell;
        border-style: solid;
        border-color: black;
        border-width: 1px 0px 0px 0px;
        height: 20px;
        width: 20px;
        max-height: 20px;
        max-width: 20px;
        overflow: hidden;
        overflow-y: hidden;
        text-overflow: ellipsis;
    }

    .ancestor_cell {
        display: table-cell;
        border-style: solid;
        border-color: black;
        border-width: 0px;
        height: 20px;
        width: 20px;
        max-height: 20px;
        max-width: 20px;
        overflow: hidden;
        overflow-y: hidden;
        text-overflow: ellipsis;
    }

    .small_first_row {
        display: table-row;
        height: 10px;
        max-height: 10px;
        min-height: 10px;
        overflow: hidden;
        width: 10px;
        max-width: 10px;
        min-width: 10px;
        text-overflow: ellipsis;
    }
    
    .small_row {
        display: table-row;
        height: 10px;
        max-height: 10px;
        min-height: 10px;
        overflow: hidden;
        width: 10px;
        max-width: 10px;
        min-width: 10px;
        overflow-y: hidden;
        text-overflow: ellipsis;
    }


    .first_small_row .cell {
        display: table-cell;
        border-style: solid;
        border-color: black;
        border-width: 0px 1px 1px 0px;
        height: 10px;
        width: 10px;
        max-height: 10px;
        max-width: 10px;
        overflow: hidden;
        overflow-y: hidden;
        text-overflow: ellipsis;
    }

    .small_row .cell {
        display: table-cell;
        border-style: solid;
        border-color: black;
        border-width: 0px 1px 1px 0px;
        height: 10px;
        width: 10px;
        max-height: 10px;
        max-width: 10px;
        overflow: hidden;
        overflow-y: hidden;
        text-overflow: ellipsis;
    }
</style>