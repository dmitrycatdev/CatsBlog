﻿import React from 'react';
import AuthService from '../auth/AuthService'


export class TopMenu extends React.Component {
    constructor(props) {
        super(props);


        this.Auth = new AuthService();
    }

    render() {
        let { user } = this.props;
        return <div style={{ backgroundColor: '#20232a', marginBottom: 20}}>
            <nav className="navbar navbar-dark my-nav container">
                <a className="navbar-brand logo" >
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMjExOS4wMDAwMDBwdCIgaGVpZ2h0PSI0ODAuMDAwMDAwcHQiIHZpZXdCb3g9IjAgMCAyMTE5LjAwMDAwMCA0ODAuMDAwMDAwIgogcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+CjxtZXRhZGF0YT4KQ3JlYXRlZCBieSBwb3RyYWNlIDEuMTUsIHdyaXR0ZW4gYnkgUGV0ZXIgU2VsaW5nZXIgMjAwMS0yMDE3CjwvbWV0YWRhdGE+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDQ4MC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiCmZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCI+CjxwYXRoIGQ9Ik0xOTI3NCA0NjgyIGMtMzUgLTExIC05MiAtNjggLTExOCAtMTE5IC0zMCAtNTcgLTM0IC0xMTMgLTE4IC0yMjgKMTQgLTk0IDE4IC05ODkgNSAtMTA0OSBsLTggLTM5IC0yOSA1MyBjLTM2IDY2IC04OCAxMjUgLTE0MSAxNTggLTc0IDQ3IC0yMDIKNDIgLTMyNSAtMTEgLTIwMSAtODggLTQ1MyAtMzc0IC02MTcgLTcwMiAtMTE1IC0yMjggLTE1MiAtMzY2IC0xNjAgLTU4NiAtNQotMTQxIC0zIC0xNjcgMTggLTI1NSA0NiAtMTkzIDE2NiAtMzEwIDM2NyAtMzU5IDk4IC0yNCAyODcgLTE2IDM4MiAxNSA3OCAyNQoxNzcgNzkgMjQ1IDEzMiAyNyAyMiA1MSAzNSA1MyAzMCAzIC05IC0xOSAtMTM0IC0xMjIgLTcwNyAtNzYgLTQxNyAtODIgLTUzOAotMzQgLTYwOSA1MiAtNzYgMTcyIC0xMTYgMjYyIC04NiA0NiAxNSAxMzIgOTggMTUzIDE0NyAxMCAyNiAzMCAxODMgNTggNDc4CjU0IDU0OCA3NSA3NDYgODIgNzY1IDMgOCA1IDI1IDQgMzggLTQgMzQgMTEgMjYgMzcgLTE4IDM4IC02NiA3OSAtMTA2IDEzNAotMTMwIDEwNiAtNDYgMzUwIC0xMCA1MjIgNzcgMjk1IDE0OCA1ODYgNDQ5IDcxNiA3MzkgNzUgMTY2IDEyMCAzOTEgMTIwIDYwNAowIDE1MiAtMTcgMjMzIC02NSAzMTYgLTQxIDcwIC0xMzEgMTU0IC0yMDAgMTg3IC0zMyAxNiAtNjggMzMgLTc4IDM4IC0xMCA1Ci0yMiA3IC0yNyA0IC01IC0zIC0xMSAtMSAtMTUgNSAtMyA1IC00MyAxMCAtODkgMTAgLTMxMCAwIC02MTQgLTIzMCAtODQ0Ci02NDAgLTM0IC02MCAtNTEgLTg0IC00OCAtNjUgMTcgOTAgNzYgNTYyIDg3IDY5NSAxOSAyMTkgMTkgODkxIDAgOTQ0IC00MAoxMTMgLTIwMCAyMDAgLTMwNyAxNjh6IG0xMDg1IC0xNTQ3IGM1MSAtNDQgNjUgLTk4IDU4IC0yMzMgLTEwIC0xOTMgLTY2IC0zNDcKLTE5NiAtNTQyIC04OCAtMTMxIC0yNDIgLTI4MyAtMzQxIC0zMzUgLTczIC0zOSAtNzggLTQwIC0xNzUgLTQwIC05MSAwIC0xMDMKMiAtMTMzIDI1IC00NSAzNCAtNzMgODUgLTc5IDE0NiAtNSA1MCAtMiA1OSA3MSAxOTggMTY5IDMyMSA0MTAgNjQyIDU2MCA3NDYKOTUgNjUgMTgzIDc4IDIzNSAzNXogbS0xNDU2IC02NyBjNTUgLTQ0IDgwIC03MyAxMTQgLTEzMyAyNiAtNDggMjggLTU3IDMxCi0yMDggMyAtMTE1IC0yIC0yMTIgLTE4IC0zNjAgbC0yMSAtMjAyIC00NSAtNDAgYy01NiAtNTIgLTE3OCAtMTI2IC0yODUgLTE3MwotNzggLTM0IC05MSAtMzcgLTE3OSAtMzcgLTg0IDAgLTk5IDMgLTEyNSAyMyAtNjIgNDkgLTcwIDc0IC02OSAyMTcgMCAxNDcgMjIKMjQ5IDg5IDQwNyA3NCAxNzYgMjMzIDQyNyAzMjMgNTEwIDQyIDM5IDQ2IDQwIDk0IDM1IDM1IC00IDYxIC0xNiA5MSAtMzl6Ii8+CjxwYXRoIGQ9Ik0yNjI5IDM4NDMgYy0xIC01IC0zIC0xMzYgLTUgLTI5MyAtNCAtMzQxIC03IC0zOTQgLTIxIC00MTIgLTM2IC00NAotMTc2IC0yOTAgLTIwNyAtMzY0IC00OCAtMTE1IC05MiAtMjczIC0xMDcgLTM4MSAtMTMgLTk3IC01IC0zOTEgMTEgLTQxMCAyCi0yIDQgLTcgNSAtMTMgMSAtNSA0IC0xMiA1IC0xNSAxIC0zIDMgLTggNCAtMTIgMSAtNSAxMCAtMjYgMjEgLTQ4IDEwIC0yMiAxOQotNDUgMjEgLTUyIDEgLTcgMjIgLTM4IDQ3IC03MCAxMjggLTE2NSAyNDggLTIyOCA0NTcgLTI0MiA2MyAtNSAxMjAgLTYgMTI1Ci0yIDYgMyAyMCA0IDMyIDMgMTIgLTIgNjIgOSAxMTAgMjMgMjkzIDg5IDYyMyAzNzEgNzkwIDY3NyA2MCAxMTAgMTIxIDI3NQoxMzkgMzczIDI5IDE2MyA5IDQxNyAtNDEgNTE1IC0yNiA1MCA1IDI0NSA4MCA1MTEgMjUgODcgNDUgMTY0IDQ1IDE2OSAwIDYKLTExIDE1IC0yNCAyMSAtMjIgMTAgLTMzIDUgLTEwOCAtNTIgLTEwOCAtODIgLTE3MyAtMTQzIC0yMDAgLTE4OCAtMTIgLTIwCi0yNSAtMzggLTI4IC00MSAtMyAtMyAtMTIgLTIwIC0xOSAtMzcgLTggLTE4IC0xNiAtMzMgLTIwIC0zMyAtMyAwIC0yMiAxMAotNDEgMjEgLTE0MCA4NiAtMzk1IDEwNCAtNTk1IDQyIGwtNTEgLTE1IC03MyAzNyBjLTg3IDQzIC0xNTAgMTAwIC0yMzggMjEzCi00OSA2MiAtNzAgODIgLTg5IDgyIC0xMyAwIC0yNSAtMyAtMjUgLTd6IG04MTYgLTY3NCBjMjAwIC05NCAyNDYgLTQ3NyA5NQotNzc5IC04MCAtMTYyIC0yNzYgLTM2MyAtNDI3IC00MzkgLTI0IC0xMiAtNDMgLTE5IC00MyAtMTYgMCAzIC0xMSAtMiAtMjUKLTExIC0xNCAtOSAtMzEgLTE0IC00MCAtMTEgLTggNCAtMTcgMyAtMTkgLTIgLTQgLTYgLTEwNiAtNiAtMTI2IDAgLTMgMSAtOCAxCi0xMiAwIC0xNiAtMiAtNzggODIgLTk4IDEzNSAtMTggNDUgLTI0IDg3IC0yOCAxNzggLTggMTk2IDI4IDM0MyAxMzMgNTUzIDExMQoyMjEgMjE5IDM0NSAzNDAgMzkyIDcxIDI4IDE5MCAyOCAyNTAgMHoiLz4KPHBhdGggZD0iTTQ2OSAzNjEzIGMtNjQgLTMzIC0xMjIgLTEwNCAtMTQ1IC0xNzggLTggLTI3IC0yNiAtMTY1IC0zOSAtMzA1Ci0yOCAtMjkzIC01OCAtNTU2IC04NiAtNzUwIC0yNiAtMTc5IC03OCAtNDgxIC04NiAtNDkzIC0xMiAtMTkgLTMzIC0xNTMgLTMzCi0yMDggMCAtNDYgNSAtNjMgMjkgLTk2IDc1IC0xMDQgMjQ1IC0xMTIgMzQ4IC0xNyA0MCAzOCA2MyAxMTUgNjMgMjE1IDAgNDMgNQo4MSAxMCA4NCA1IDMgMTAgMzIgMTAgNjMgMCA5NSAyMSAyODQgMzUgMzE4IDExIDI2IDI1IDM1IDg5IDU5IDc3IDI4IDE1NiAzMQoxNjQgNiAyIC02IDkgLTExIDE1IC0xMSAyMiAtMSAxMjkgLTEyNyAyMDggLTI0NiAxMTYgLTE3NiAxNTIgLTIyMyAyMjYgLTMwNAo4MCAtODcgMTUxIC0xNDEgMjQxIC0xODMgNjUgLTMxIDcyIC0zMiAxOTcgLTMyIDE0NSAwIDE5OSAxNCAyNjggNjcgNDkgMzkgOTAKMTA5IDkxIDE1OSAyIDYyIC0yMiA3OCAtMTQ2IDk1IC0xNDMgMjAgLTIwMyA1MCAtMzA0IDE1NiAtNDQgNDYgLTEyNSAxNDQKLTE4MiAyMTkgLTEzMSAxNzUgLTIzMCAyNjggLTMwNCAyOTEgLTQ2IDE0IC00NyAyMyAtOCA0MyA1OSAzMCAyMTIgMTY4IDM0MQozMDggMjA3IDIyNCAyNTUgMjYzIDM4NCAzMTIgMTU5IDYxIDE4MSA4MyAxNzIgMTc2IC02IDY4IC0zOSAxMjEgLTEwNyAxNzAKLTYwIDQzIC0xNjUgNTEgLTI2MCAxOSAtMTQ0IC00OCAtMjUxIC0xNDggLTQ2MiAtNDMxIC0yMjUgLTMwMiAtMzE2IC0zODgKLTQ4MyAtNDYxIC0zMyAtMTUgLTczIC0zMCAtODkgLTM0IGwtMjkgLTcgNiA1OSBjMTEgMTA1IDU2IDMzNSAxMDMgNTIzIDU2CjIyNCA1NyAyODggOSAzNjEgLTU2IDg0IC0xNDYgMTAzIC0yNDYgNTN6Ii8+CjxwYXRoIGQ9Ik0xNTgyNCAzNjMxIGMtNjkgLTE4IC0xMzkgLTg1IC0xNzYgLTE2OCAtMTggLTQxIC0yMiAtNzYgLTI5IC0yNDgKLTIwIC00OTIgLTMxIC02ODcgLTU1IC05MzUgLTE0IC0xNDYgLTI4IC0yNzIgLTMxIC0yODAgLTMgLTggLTUgLTMxIC00IC01MSAxCi0yMSAtMiAtNDAgLTcgLTQzIC02IC0zIC04IC0xNSAtNSAtMjYgMyAtMTEgMCAtMjcgLTcgLTM0IC02IC04IC0xMCAtMjMgLTkKLTMzIDEgLTEwIC0xIC0yNSAtNCAtMzMgLTMgLTggLTIwIC0xMDUgLTM3IC0yMTUgLTE3IC0xMTAgLTYwIC0zMzMgLTk1IC00OTUKLTc5IC0zNjkgLTk1IC00NjMgLTk1IC01NjIgbDAgLTc5IDUxIC01NCBjOTYgLTEwMiAxOTAgLTEyMyAyNzEgLTYwIDEwMSA3NwoxNDIgMTgwIDE2OCA0MjUgMTcgMTYzIDc4IDU5NCAxMDYgNzU4IDIzIDEzNyA0MCAxODYgNTEgMTU0IDEyIC0zMiA2MiAtNzcKMTEwIC05OSA0MyAtMTggNzEgLTIzIDE0MyAtMjMgMjk3IDAgNTk3IDE2NSA5MTIgNTAxIDIwMyAyMTcgMzEyIDQwMCAzODIgNjQyCjU3IDE5NSA3NCA0NDEgNDAgNTU4IC00OCAxNjMgLTE2NCAyODYgLTMyMCAzNDAgLTcwIDIzIC0xOTQgMjUgLTI3OSA0IC04OAotMjIgLTI0NyAtMTA1IC0zNDcgLTE4MCAtMTQ2IC0xMTAgLTM1NiAtMzM1IC00MzcgLTQ2OCAtMTMgLTIxIC0yOCAtNDMgLTM1Ci01MCAtNyAtNiAtMTUgLTIxIC0xOSAtMzEgLTE4IC00NiAtMTggNCAtMSAxMzYgMTIgOTEgMTkgMjA0IDE5IDMxMyAwIDE1NiAtMgoxNzQgLTIzIDIyMSAtMTMgMjggLTM4IDY2IC01NyA4NCAtMjggMjcgLTQxIDMyIC05MSAzNSAtMzMgMiAtNzMgMSAtOTAgLTR6Cm0xMTk5IC00ODEgYzQyIC01MCA1MCAtOTIgNDQgLTIyMSAtNyAtMTQyIC0zNyAtMjQ4IC0xMDkgLTM5NCAtNTAgLTk5IC0xMTAKLTE5MyAtMTM1IC0yMDggLTcgLTQgLTEzIC0xNSAtMTMgLTIyIDAgLTggLTQgLTE1IC0xMCAtMTUgLTUgMCAtMTAgLTcgLTEwCi0xNSAwIC04IC0zIC0xNSAtOCAtMTUgLTQgMCAtMzYgLTM0IC03MiAtNzYgLTg3IC0xMDEgLTIyMiAtMjE0IC0zMDYgLTI1NQotMTI0IC02MSAtMjQyIC01MCAtMzE5IDMxIC03NiA3OSAtMjUgMjk3IDEyMyA1MzAgMTkgMzAgMzkgNTcgNDMgNTggNSAyIDkgMTAKOSAxOCAwIDggNSAxNCAxMCAxNCA2IDAgMTAgNyAxMCAxNSAwIDkgNyAxOCAxNSAyMSA4IDQgMTUgMTEgMTUgMTYgMCA1IDExIDIyCjI0IDM2IDE0IDE1IDUzIDYzIDg4IDEwNyA5OCAxMjUgMjc0IDI5NCAzNTMgMzQwIDg4IDUyIDEyMCA2MyAxNzcgNjQgNDAgMSA1MAotMyA3MSAtMjl6Ii8+CjxwYXRoIGQ9Ik05MDIzIDM2MTAgYy0xODEgLTQ3IC0yODkgLTExNCAtNDU4IC0yODQgLTI1OSAtMjYxIC00MTkgLTU2MyAtNDY1Ci04ODIgLTEzIC05NCAtMTMgLTMxNyAxIC0zOTAgNyAtMzIgMTMgLTY4IDE1IC03OSAxIC0xMSAzIC0yMSA0IC0yMiAyIC0yIDMKLTYgNCAtMTAgMSAtNSA1IC0xNCA5IC0yMCA1IC03IDYgLTEzIDIgLTEzIC0zIDAgNCAtMTkgMTYgLTQyIDEyIC0yNCAyMSAtNDQKMjAgLTQ2IC00IC02IDgzIC0xMTYgMTIyIC0xNTEgNTEgLTQ4IDEzOCAtOTcgMjIxIC0xMjMgNjMgLTIwIDMzMCAtNDMgMzUwCi0zMCA2IDMgMjIgNSAzNiA0IDQyIC01IDIxNSA0NyAzMDggOTEgMjY5IDEyOCA1NDkgNDE0IDU2OCA1ODEgMTIgMTAwIC0xNwoxNDYgLTkyIDE0NiAtNjUgMCAtODUgLTEyIC0xOTEgLTExMSAtMTcyIC0xNjEgLTMwNSAtMjQ5IC00NjYgLTMwNiAtNTkgLTIxCi05MiAtMjYgLTE4MiAtMjggLTYwIDAgLTExNSAzIC0xMjEgNyAtNyA1IC0xNiA3IC0yMSA2IC0xOCAtNiAtOTkgNTQgLTEzMSA5OAotMjQgMzMgLTM0IDU4IC0zOCAxMDIgLTYgNTIgLTQgNjEgMTYgODAgMTggMTcgODUgNDEgMTM1IDQ4IDYgMSAxMyAzIDE4IDQgNAoxIDEyIDQgMTcgNSA2IDEgMTIgNCAxNSA1IDMgMSAxMCA0IDE1IDUgNiAxIDEzIDQgMTggNSA0IDIgMTIgNCAxNyA0IDYgMSAyMAo3IDMzIDE0IDEyIDcgMjIgMTAgMjIgNyAwIC0zIDE1IDIgMzMgMTIgMTcgOSAzNyAxOCA0MiAxOSA2MSAxMyAyMzYgMTE4IDM1MgoyMTEgMTY5IDEzNiAyOTUgMjk4IDM1NSA0NTcgMjggNzQgMzEgOTIgMzIgMjA2IDEgMTIxIDAgMTI3IC0zMSAxOTMgLTU0IDExMwotMTUxIDE5NiAtMjcyIDIzMyAtNjcgMjAgLTIzOSAxNyAtMzI4IC02eiBtMjAzIC0zNTYgYzEyNiAtODMgMzEgLTMxMSAtMjEwCi00OTggLTY2IC01MiAtMjE5IC0xNDEgLTIyOCAtMTM0IC0yIDEgLTE0IC01IC0yOCAtMTIgLTE0IC04IC0yOSAtMTUgLTM1IC0xNgotNSAtMiAtNDMgLTEyIC04NCAtMjQgLTQwIC0xMSAtNzUgLTE5IC03OCAtMTcgLTIgMiA4IDQwIDIxIDgzIDgzIDI2MiAzMTYKNTU5IDQ4NiA2MjAgNTAgMTkgMTI2IDE3IDE1NiAtMnoiLz4KPHBhdGggZD0iTTEwNDI5IDM1OTMgYy02NCAtMzMgLTEyMiAtMTA0IC0xNDUgLTE3OCAtOCAtMjcgLTI2IC0xNjcgLTQwIC0zMTAKLTM4IC00MDkgLTEyNiAtMTA2NiAtMTUxIC0xMTI1IC0zIC04IC01IC0yNSAtNCAtMzcgMSAtMTEgLTMgLTI0IC05IC0yOCAtNQotMyAtNyAtMTEgLTQgLTE3IDQgLTUgMiAtMjAgLTQgLTMxIC0xNCAtMzAgLTMyIC0xNDIgLTMyIC0yMDUgMCAtNDIgNiAtNTggMzMKLTkzIDY3IC04OSAxODIgLTExNSAyODMgLTY0IDg4IDQ0IDEyNCAxMjEgMTI0IDI2NyAwIDQyIDUgODAgMTAgODMgNiAzIDEwIDMyCjEwIDYzIDAgODMgMTkgMjcyIDMxIDMwOSA4IDI3IDIwIDM1IDgwIDU3IDM5IDE0IDg2IDI2IDEwNiAyNiA4NiAwIDE2NyAtNzQKMzA2IC0yODQgNTIgLTc3IDExNSAtMTY4IDE0MSAtMjAwIDQ1IC01OCAxNzMgLTE5NiAxODIgLTE5NiAzIDAgMTUgLTEwIDI3Ci0yMSAxMiAtMTIgNTYgLTM4IDk3IC01OCA3NCAtMzUgNzcgLTM2IDIwMCAtMzYgMTc0IDAgMjQ3IDMwIDMyNiAxMzMgMjggMzYKMzQgNTQgMzQgOTIgMCA2NyAtMTcgNzkgLTE0MSA5NiAtNTcgOCAtMTIzIDI0IC0xNDggMzYgLTY1IDMxIC0yMTggMTg5IC0zMzgKMzQ4IC01NiA3NCAtMTIzIDE1NiAtMTUwIDE4MiAtNDYgNDUgLTE1MCAxMDggLTE3OSAxMDggLTI0IDAgLTE1IDE5IDE2IDM1IDU5CjMwIDIxMiAxNjggMzQxIDMwOCAyMDcgMjI0IDI1NSAyNjMgMzg0IDMxMiAxNTkgNjEgMTgxIDgzIDE3MiAxNzYgLTYgNjggLTM5CjEyMSAtMTA3IDE3MCAtNjAgNDMgLTE2NSA1MSAtMjYwIDE5IC0xNDQgLTQ4IC0yNTEgLTE0OCAtNDYyIC00MzEgLTIyNSAtMzAyCi0zMTYgLTM4OCAtNDgzIC00NjEgLTMzIC0xNSAtNzMgLTMwIC04OSAtMzQgbC0yOSAtNyA2IDU5IGMxMSAxMDUgNTYgMzM1IDEwMwo1MjMgNTYgMjI0IDU3IDI4OCA5IDM2MSAtNTYgODQgLTE0NiAxMDMgLTI0NiA1M3oiLz4KPHBhdGggZD0iTTQ2NzAgMzU3MyBjLTM1IC0xMyAtNjkgLTQ1IC04NSAtODAgLTE0IC0zMCAtMjAgLTc3IC0yNiAtMjE4IC00Ci05OSAtMjEgLTI5MCAtMzggLTQyNSAtMTcgLTEzNSAtMzYgLTI5MyAtNDEgLTM1MCAtMTMgLTEyNyAtMzEgLTc0MSAtMjMgLTc1NAo0IC01IDcgLTIxIDggLTM1IDUgLTYzIDgwIC0xNTggMTQyIC0xODIgNDEgLTE1IDEzNSAtMTAgMTc5IDEwIDQ4IDIyIDc3IDU5CjkzIDExOCAxMiA0MyAxMDUgMjU4IDEyMCAyNzcgNSA2IDQxIDcxIDgxIDE0NSA0MCA3NCA3OCAxNDAgODUgMTQ4IDggNyAxNyAyMwoyMSAzNSAzIDEyIDExIDI2IDE2IDMyIDUgNiA1NSA4MyAxMTEgMTcxIDE5NCAzMDYgMzQyIDQ5NSAzODggNDk1IDQ0IDAgNTYKLTgyIDc0IC00OTUgMjAgLTQ3MyA0OSAtNjI4IDEzMSAtNjkwIDY3IC01MSAxMTkgLTY3IDIwMyAtNjMgOTMgNSAxMzQgMjMgMjEzCjk2IDkwIDg0IDE2MyAyMDQgMzYwIDU5NyAyNTMgNTA0IDI5MyA1NjkgMzQ3IDU2MyA1NyAtNyA4MCAtMTAzIDEwNiAtNDQxIDE3Ci0yMTkgMjggLTMxOSA1MCAtNDQyIDggLTQ0IDE2IC04OSAxOCAtMTAwIDEgLTExIDYgLTI2IDExIC0zMyA0IC03IDUgLTE2IDIKLTE5IC0zIC0zIC0xIC0xMiA1IC0yMCA2IC03IDggLTEzIDQgLTEzIC00IDAgLTIgLTcgNSAtMTUgNyAtOCA5IC0xNSA2IC0xNQotMTcgMCA2MSAtMTIzIDEwMyAtMTY1IDExMyAtMTEyIDI5NiAtMTE2IDQzMyAtOSA2MiA0OSA4OSA4OSA5MyAxMzkgNSA1NyAtMjEKMTA1IC03MyAxMzcgLTYyIDM4IC0xMDIgNzkgLTEyOCAxMzEgLTM5IDc2IC03MSAyMzcgLTk5IDQ5NyAtNDQgNDE0IC02OCA1MzQKLTEzMSA2NjcgLTY3IDE0MCAtMTYxIDE5NyAtMzE1IDE5MSAtNzUgLTMgLTk0IC04IC0xNjIgLTQxIC05MSAtNDUgLTE3NyAtMTI2Ci0yNTggLTI0MiAtNzcgLTExMSAtMTI0IC0xOTcgLTI4NyAtNTIwIC0xNDkgLTI5NiAtMTgyIC0zNDggLTIwMyAtMzI4IC0xNiAxNgotMjYgMTM3IC0zOSA0NTMgLTExIDI3NSAtMTcgMzMwIC01MiA0NDEgLTMzIDEwOSAtMTIzIDIwMSAtMjI1IDIyOSAtNjQgMTgKLTE3NiA3IC0yNDYgLTI0IC0yMDMgLTg5IC00MTMgLTM1NyAtNjY5IC04NTEgbC0xMTkgLTIzMCA1IDczIGM0IDQxIDM0IDIxMgo2OCAzODAgNTggMjg4IDYxIDMxNiA2MiA0NTIgMSAxMzMgLTEgMTQ5IC0yMiAxOTIgLTMwIDU5IC04OSAxMTMgLTEzOSAxMjcKLTQwIDExIC0xMzcgMTMgLTE2MyA0eiIvPgo8cGF0aCBkPSJNMTI1OTUgMzQ5NCBjLTkwIC01MCAtMTM0IC0xMTQgLTEzNSAtMTk0IDAgLTgxIC0yNCAtMjE3IC04MSAtNDYwCi01NSAtMjM1IC04MiAtMzczIC05OCAtNDkzIC0xNCAtMTAwIC0xNCAtMzE4IDAgLTM3NyA2IC0yNSAxMiAtNTcgMTQgLTczIDEzCi05OSAxMzIgLTI0NCAyNDcgLTMwMiA2MyAtMzEgNzkgLTM1IDE1MSAtMzUgMTk2IDAgMzc4IDkwIDU2OCAyNzkgMTAwIDEwMQoxODEgMjA0IDI1NiAzMjggMjUgNDEgNDYgNzMgNDggNzEgMiAtMiA1IC02OCA4IC0xNDggMyAtODAgOCAtMTUzIDEyIC0xNjIgNAotOSA0IC0yMSAxIC0yNyAtNCAtNSAtMiAtMTMgNCAtMTYgNiAtNCA4IC0xNSA1IC0yNSAtMyAtMTAgLTEgLTIxIDUgLTI1IDYgLTMKOCAtMTAgNiAtMTQgLTcgLTEwIDI2IC0xMTYgNDkgLTE2MSAzMCAtNjAgNzYgLTExMCAxMTggLTEzMiA2MyAtMzIgMTY0IC0yMgoyNDggMjMgNzYgNDMgMTA0IDc2IDEwNCAxMjkgMCAzNSAtNiA0NSAtNTggOTEgLTUwIDQ0IC0xMTAgMTI5IC05MSAxMjkgNCAwIDAKNyAtNyAxNyAtOCA5IC0xMyAxOCAtMTEgMjAgMSAxIDIgNCAxIDYgMCAxIC0yIDEzIC00IDI3IC0yIDE0IC04IDU0IC0xNCA5MAotNiAzNiAtMTEgMTUzIC0xMSAyNjAgMCAyNzYgMjYgNDY4IDk1IDcwMCAzOSAxMzQgNDMgMTk2IDE2IDI1NiAtMjkgNjQgLTgwCjk3IC0xNTYgMTAyIC0xNDEgOSAtMjA1IC02NyAtMjkwIC0zNDMgLTk4IC0zMjAgLTEzMyAtNDA0IC0yMzEgLTU1NyAtMTIzCi0xOTEgLTM0NiAtNDE4IC00NzcgLTQ4NCAtNTggLTMwIC0xMzUgLTQxIC0xNjUgLTI1IC0zMSAxNyAtNTIgOTkgLTUyIDIwNiAwCjE0OSA3MiA0NjggMTgxIDgwMSA1OCAxNzggNjIgMTk1IDYzIDI5MCAxIDk1IC0xIDEwMyAtMjcgMTQxIC00NyA2OCAtOTkgOTYKLTE4NyAxMDAgLTU2IDMgLTgyIC0xIC0xMDUgLTEzeiIvPgo8cGF0aCBkPSJNMTQ3MDMgMjE1NyBjLTMgLTUgLTE0IC03IC0yNCAtNCAtMTAgMyAtMjIgMSAtMjUgLTQgLTMgLTUgLTEwIC03Ci0xNSAtNCAtMTUgMTAgLTg0IC0zNCAtMTAxIC02MyAtMTkgLTMzIC0zNCAtMzA3IC0xOCAtMzE3IDYgLTQgOCAtMTAgNSAtMTUKLTEzIC0yMiAyNCAtNzggNjkgLTEwMyAzOSAtMjIgNTcgLTI1IDExOCAtMjQgNjYgMiA3OSA2IDEzMyA0MSA2OCA0NCAyMDkgMTgyCjIwMCAxOTYgLTMgNSAtMSAxMSA1IDE1IDYgNCA4IDEwIDUgMTUgLTMgNSAtMSAxMSA1IDE1IDUgMyAxMCAzNCAxMCA2OCAwIDc1Ci0yMSAxMTUgLTgyIDE1NCAtMzkgMjQgLTU1IDI3IC0xNjEgMzIgLTY2IDMgLTEyMSAyIC0xMjQgLTJ6Ii8+CjwvZz4KPC9zdmc+Cg=="
                        height={55}
                        className="d-inline-block align-top"/>
                </a>
                <span className="navbar-brand mb-0 h1">{user.firstName} {user.lastName && user.lastName}</span>
                <form className="form-inline">
                    <input className="form-control mr-sm-3" type="search" placeholder="Поиск.." aria-label="Search" />
                    <button
                        onClick={() => this.Auth.logout()}
                        className="btn btn-outline-info  my-3 my-sm-0"
                        style={{marginLeft: 30}}>Выйти</button>
                </form>

             </nav>
        </div>
    }
}