import React from 'react'
import MaintagDisplay from './MaintagDisplay'
import "./Maintag.css";

export default class Maintags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            science: ["ASTR", "BCBP", "BIOL", "CHEM", "CSCI", "ERTH", "IENV", "ISCI", "ITWS", "MATH", "MATP", "PHYS"],
            hass: ["ARTS", "COGS", "COMM", "ECON", "GSAS", "IHSS", "LANG", "LITR", "PHIL", "PSYC", "WRIT"],
            eng: ["BMED", "CHME", "CIVL", "ECSE", "ENGR", "ENVE", "ISYE", "MANE", "MTLE"],
            other: ["ADMN", "STSO", "USAF", "USAR", "USAR", "USNA"],
            arche: ["ARCH", "LGHT"],
            manage: ["MGMT"]
        }
    }

    render() {
        return (
            // <div>
            // <div>
            //     SCIENCE
            //     <div>
            //         {this.state.science.map(prefix => <MaintagDisplay name={prefix} />)}
            //     </div>
            // </div>
            //     {this.state.science.map(prefix => <MaintagDisplay name={prefix} />)} -----
            //     {this.state.hass.map(prefix => <MaintagDisplay name={prefix} />)} -----
            //     {this.state.eng.map(prefix => <MaintagDisplay name={prefix} />)} -----
            //     {this.state.other.map(prefix => <MaintagDisplay name={prefix} />)} -----
            //     {this.state.arche.map(prefix => <MaintagDisplay name={prefix} />)} -----
            //     {this.state.manage.map(prefix => <MaintagDisplay name={prefix} />)} -----
            // </div>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <div>
                            <div className="departmentTitle">SCIENCE</div>
                            <div>
                                {this.state.science.map(prefix => <MaintagDisplay name={prefix} />)}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <div>
                            <div className="departmentTitle">HASS</div>
                            <div>
                                {this.state.hass.map(prefix => <MaintagDisplay name={prefix} />)}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <div>
                            <div className="departmentTitle">Engineer</div>
                            <div>
                                {this.state.eng.map(prefix => <MaintagDisplay name={prefix} />)}
                            </div>
                        </div>
                        <div>
                            <div className="departmentTitle">Management</div>
                            <div>
                                {this.state.manage.map(prefix => <MaintagDisplay name={prefix} />)}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <div>
                            <div className="departmentTitle">Arche</div>
                            <div>
                                {this.state.arche.map(prefix => <MaintagDisplay name={prefix} />)}
                            </div>
                        </div>
                        <div>
                        <div className="departmentTitle">Engineer</div>
                            <div>
                                {this.state.other.map(prefix => <MaintagDisplay name={prefix} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}