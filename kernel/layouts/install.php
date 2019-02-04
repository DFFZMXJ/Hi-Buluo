<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Installation - Hi Buluo</title>
        <link rel="stylesheet" href="assets/css/mdui.min.css">
        <style>
            .banner{
                height:305px;
                position:relative;
                background-image:url(../img/homepage_header_background.svg);
                background-repeat: no-repeat;
                background-position: 50%;
            }
        </style>
    </head>
    <body>
        <article class="banner mdui-valign">
            <p class="mdui-typo-headline mdui-center mdui-text-color-green-accent">Welcome</p>
        </article>
        <main class="mdui-container">
                <div class="mdui-panel mdui-panel-popout" mdui-panel="{accordion:true}">
                    <div class="mdui-panel-item">
                        <div class="mdui-panel-item-header">
                            <span class="mdui-panel-item-title">Usage</span>
                            <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
                        </div>
                        <div class="mdui-panel-item-body">
                            <article class="mdui-typo">
                                <p>
                                    Welcome! This is an amazing software, whole software was developed by a Middle School student. Hope you enjoy this!
                                </p>
                            </article>
                        </div>
                    </div>
                    <div class="mdui-panel-item">
                        <div class="mdui-panel-item-header">
                            <span class="mdui-panel-item-title">Environment Check</span>
                            <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
                        </div>
                        <div class="mdui-panel-item-body">
                            <article class="mdui-typo">
                                <p>
                                  To run the software normally, please make sure you have checked them below:
                                </p>
                                <ul>
                                  <li>PHP version is 5.6 or higher (I developed this in 7.1)</li>
                                  <li>Full Read/Write permission</li>
                                  <li>Enabled SQLite and related PHP extensions.</li>
                                  <li>There're no stupid kids.</li>
                                </ul>
                            </article>
                        </div>
                    </div>
                    <div class="mdui-panel-item">
                        <div class="mdui-panel-item-header">
                            <span class="mdui-panel-item-title">Initial Information</span>
                            <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
                        </div>
                        <div class="mdui-panel-item-body">
                            <article class="mdui-typo">
                                <p>
                                  To run the software normally, please fill the blanks below.
                                </p>
                            </article>
                            <form class="mdui-row-xs-1 mdui-row-md-2">
                              <div class="mdui-col mdui-textfield mdui-textfield-floating-label">
                                <label class="mdui-textfield-label">Website name</label>
                                <input class="mdui-textfield-input" type="text"/>
                              </div>
                              <div class="mdui-col mdui-textfield mdui-textfield-floating-label">
                                <label class="mdui-textfield-label">Database storage location</label>
                                <input class="mdui-textfield-input" type="text" disabled/>
                                <span class="mdui-textfield-helper">Unsupported to direct set for now.</span>
                              </div>
                              <div class="mdui-col mdui-textfield mdui-textfield-floating-label">
                                <label class="mdui-textfield-label">Admin's username</label>
                                <input class="mdui-textfield-input" type="text"/>
                              </div>
                              <div class="mdui-col mdui-textfield mdui-textfield-floating-label">
                                <label class="mdui-textfield-label">Admin's email</label>
                                <input class="mdui-textfield-input" type="text"/>
                              </div>
                              <div class="mdui-col mdui-textfield mdui-textfield-floating-label">
                                <label class="mdui-textfield-label">Admin's password</label>
                                <input class="mdui-textfield-input" type="text"/>
                              </div>
                              <div class="mdui-col mdui-textfield mdui-textfield-floating-label">
                                <label class="mdui-textfield-label">Repeat admin's password</label>
                                <input class="mdui-textfield-input" type="text"/>
                              </div>
                            </form>
                        </div>
                    </div>
                    <div class="mdui-panel-item">
                        <div class="mdui-panel-item-header">
                            <span class="mdui-panel-item-title">Finish</span>
                            <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
                        </div>
                        <div class="mdui-panel-item-body">
                            <article class="mdui-typo">
                                <p>
                                  Thank you for choosing this software. WINNER WINNER CHICKEN DINNER! Now you can click the button to start.
                                </p>
                            </article>
                            <div id="progress"></div>
                            <div class="mdui-panel-item-actions">
                              <button class="mdui-btn mdui-ripple mdui-text-color-theme-accent">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    </body>
</html>