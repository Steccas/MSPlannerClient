$("body").append(`<style class='my-custom-dark-style'>
        .mectrl_header 
        {
            color: #fff;
        }
        .appContent,.appContent .sideNav .plannerLeftNav,.appContent .sideNav .plannerLeftNav .content,body > div > div > div.appContent > div div > div.content
        {
            background-color: #272727;
        }
        .leftNavStaticLinksGroup
        {
            background-color: #272727;
            margin: 0;
        }
        .theme-light .sideNav>.header {
            background-color: #272727;
            color: #ffffff;
        }
        .theme-light .sideNav>.header:focus, .theme-light .sideNav>.header:hover {
            background-color: #e8e8e8;
            color: black;
        }
        .theme-light .plannerLeftNav {
            border-color: black;
            background-color: #272727;
            border-right: 0px;
        }
        .theme-light .sideNav 
        {
            border-color: black;
        }
        .selected .leftNavItem
        {
            color: black;
        }
        .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>li:hover .linkContents span.leftNavItem
        {
            color: black;
        }
        .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>li:hover>a>.linkContents>.outerPaddingRemove>.icon {
            color:black;
        }
        .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>li>a>.linkContents>.outerPaddingRemove>.icon {
            color: #ffffff;
        }
        .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>li.selected, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.list>li.selected, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>li.selected, .theme-light .plannerLeftNav>.content>ul>li.selected
        {
            background-color: #e2e2e2;
        }
        .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>li.selected>a>.linkContents>.outerPaddingRemove>.icon
        {
            color: #000000;
        }
        .theme-light .topHeader>.nonIcon>div>.secondarySection>.pivotsSection>div>.pivotLink>.icon>button {
            color: #ffffff;
        }
        .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>.header:focus, .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>.header:focus-within, .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>.header:hover, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.header:focus, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.header:focus-within, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.header:hover,.theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.list>.header:focus, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.list>.header:focus-within, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.list>.header:hover, .theme-light .plannerLeftNav>.content>ul>.header:focus, .theme-light .plannerLeftNav>.content>ul>.header:focus-within, .theme-light .plannerLeftNav>.content>ul>.header:hover {
            background-color: #f3f2f1;
            color: black;
        }
        .theme-light .plannerLeftNav .content .leftNavStaticLinksGroup .header,.theme-light .plannerLeftNav .content .leftNavStaticLinksGroup .header,.theme-light .plannerLeftNav .content .leftNavStaticLinksGroup .header,.theme-light .plannerLeftNav .content div .leftNavDynamicLinksGroup .header,.theme-light .plannerLeftNav .content div .leftNavDynamicLinksGroup .header,.theme-light .plannerLeftNav .content div .leftNavDynamicLinksGroup .header,.theme-light .plannerLeftNav .content div .leftNavDynamicLinksGroup .list .header,.theme-light .plannerLeftNav .content div .leftNavDynamicLinksGroup .list .header,.theme-light .plannerLeftNav .content div .leftNavDynamicLinksGroup .list .header,.theme-light .plannerLeftNav .content ul .header,.theme-light .plannerLeftNav .content ul .header,.theme-light .plannerLeftNav .content ul .header
        {
            background-color: #272727;
            color: white;   
        }
        .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>li:focus, .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>li:focus-within, .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>li:hover, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.list>li:focus, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.list>li:focus-within, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.list>li:hover, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>li:focus, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>li:focus-within, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>li:hover, .theme-light .plannerLeftNav>.content>ul>li:focus, .theme-light .plannerLeftNav>.content>ul>li:focus-within, .theme-light .plannerLeftNav>.content>ul>li:hover {
            background-color: #f3f2f1;
            color: black;
        }
        .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>li,.theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>li,.theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>li,.theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.list>li,.theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.list>li,.theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.list>li,.theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>li,.theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>li,.theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>li,.theme-light .plannerLeftNav>.content>ul>li,.theme-light .plannerLeftNav>.content>ul>li,.theme-light .plannerLeftNav>.content>ul>li
        {
            background-color: #272727;
            color: white;   
        }
        .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>.header>.groupButton, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.header>.groupButton, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.list>.header>.groupButton, .theme-light .plannerLeftNav>.content>ul>.header>.groupButton {
            color: #ffffff;
        }
        .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>.header:hover>.groupButton, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.header:hover>.groupButton, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.list>.header:hover>.groupButton, .theme-light .plannerLeftNav>.content>ul>.header:hover>.groupButton {
            color:black;
        }
        .theme-light .plannerLeftNav>.content>.leftNavStaticLinksGroup>.header:focus>.groupButton, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.header:focus>.groupButton, .theme-light .plannerLeftNav>.content>div>.leftNavDynamicLinksGroup>.list>.header:focus>.groupButton, .theme-light .plannerLeftNav>.content>ul>.header:focus>.groupButton
        {
            color:black;
        }
        .theme-light .noAccessErrorPage ::-webkit-scrollbar-thumb, .theme-light .plannerApp ::-webkit-scrollbar-thumb, .theme-light .plannerAppCallout ::-webkit-scrollbar-thumb, .theme-light .plannerAppDialog ::-webkit-scrollbar-thumb, .theme-light .sharepointApp ::-webkit-scrollbar-thumb, .theme-light .teamsApp ::-webkit-scrollbar-thumb, .theme-light .webpartApp ::-webkit-scrollbar-thumb
        {
            background-color: #d6d4d1;
        }
        .taskBoardView.boardColumn>div>.columnHeader>.columnHeaderTitle>.titleSection>.columnTitle>h3 
        {
            color: white;
        }
        .boardColumn>div>.columnHeader>.columnHeaderTitle>.titleSection>.columnTitle.readOnly,.boardColumn>div>.columnHeader>.columnHeaderTitle>.titleSection>button>.ms-Icon
        {
            color: black;
        }
        .theme-light .boardColumn 
        {
            background-color: #383838;
        }
        .theme-light .topHeader .dropdownMenu>.ms-Label {
            color:white;
        }
        .theme-light .topHeader .dropdownMenu:hover {
            background-color: #edebe9;
        }
        .theme-light .topHeader .dropdownMenu:hover .ms-Label,.theme-light .topHeader .dropdownMenu:hover .ms-Label>.value
        {
            color: black;
        }
        .theme-light .topHeader .dropdownMenu>.ms-Label>.value {
            color: #ffffff;
        }
        .leftNavItem
        {
            color: white;
        }
        h3.headerText 
        {
            color: white;
        }
        .header:hover h3.headerText,.header:focus h3.headerText
        {
            color: black;
        }
        .topHeader>.nonIcon>div .primarySection>.primaryTextSectionContainer>.primaryTextSection>button.primaryTextSectionTitle
        {
            color: white;
        }
        #planner-main-content .nonIcon .primarySection .contextInfoSectionContainer .ms-TooltipHost
        {
            color: white;
        }
        .ms-Layer.ms-Layer--fixed .ms-Dialog-main.taskEditor-dialog-container .taskEditor-dialog-content .assignedToUsers .ms-Persona-details .ms-Persona-primaryText .ms-TooltipHost
        {
            color: white;
        }
        #planner-main-content .nonIcon .secondarySection .pivotLink span
        {
            color: white;
        }
        .theme-light .boardColumn>div>.columnHeader>.addButtonContainer>.addButton {
            color: white;
        }
        .theme-light .boardColumn>div>.columnHeader>.columnHeaderTitle>.titleSection {
            color: #ffffff;
        }
        .theme-light .boardColumn>div>.columnHeader>.addButtonContainer>.addButton {
            background-color: #4c4c4c;
        }
        .theme-light .secondarySection>.sectionToggle:hover
        {
            color:white;
            background: hsl(0deg 0% 45%);
        }
        .theme-light .secondarySection>.sectionToggle 
        {
            color: black;
        }
        .sideNav>.content>.leftNavStaticLinksGroup>li>a>.linkContents:hover,.sideNav>.content>div>.leftNavDynamicLinksGroup>.list>li>a>.linkContents:hover,.sideNav>.content>div>.leftNavDynamicLinksGroup>li>a>.linkContents:hover,.sideNav>.content>ul>li>a>.linkContents:hover
        {
            color:black;
        }
        .theme-light .sideNav>.footer {
            color: #ffffff;
            background-color: #272727;
        }
        .theme-light .sideNav>.footer .chevron ,.theme-light .sideNav>.footer:hover .leftNavItem
        {
            color: white;
        }
        .theme-light .sideNav>.footer:hover {
            color: black;
            background-color: white;
        }
        .theme-light .sideNav>.footer:hover .leftNavItem,.theme-light .sideNav>.footer:hover .chevron 
        {
            color: black;
        }
        .taskBoardCard:hover
        {
            box-shadow: 5px 12px 20px 0px #000000a6;
        }
        .theme-light .taskCard>.container {
            background-color: #727272;
        }
        .theme-light .taskCard>.container>.contentAndLabels>.textContent>.taskMenuSection {
            color: #000000;
        }
        .theme-light .taskCard>.container>.contentAndLabels>.textContent>.topBar>.titleRow>.title {
            color: #ffffff;
            font-weight: 500;
        }
        .theme-light .taskCard>.container>.contentAndLabels>.textContent>.topBar>.preview>.descriptionPreview {
            color: #ffffff;
        }
        .topHeader>.nonIcon>div>.secondarySection>.pivotsSection>div.removable>.pivotLink.isSelected>.icon>.ms-Icon, .topHeader>.nonIcon>div>.secondarySection>.pivotsSection>div.removable>.pivotLink.isSelected>:not(.icon), .topHeader>.nonIcon>div>.secondarySection>.pivotsSection>div.removable>.pivotLink:hover>.icon>.ms-Icon, .topHeader>.nonIcon>div>.secondarySection>.pivotsSection>div.removable>.pivotLink:hover>:not(.icon) {
            border-bottom: 2px solid #ffffff;
            padding-bottom: 0;
        }
        .theme-light .topHeader>.nonIcon>div>.rightAlignedSection>.facePileArray .ms-Facepile-descriptiveOverflowButton .ms-Persona-initials>span
        {
            color:white;
        }
        html[dir=ltr] .topHeader .dropdownMenu>.dropDownIcon
        {
            color:white;
        }
        .theme-light .boardColumn>div>.columnHeader>.columnHeaderTitle>.titleSection>.columnTitle.addColumn
        {
            color:white;
        }
        .checkbox-container:hover .completeButtonIcon {
            color: #000000;
        }
        .theme-light .taskCard>.container>.contentAndLabels>.textContent>.thumbnail.placeholder {
            background-color: #373737;
        }
        .documentPreviewIcon.excelIconColor {
            color: #239323;
            background-color: #373737;
        }
        .referencePreviewDescription .documentPreviewIcon.excelIconColor {
            background-color: #727272;
        }
        .toggleFavoriteIcon>span>.ms-Icon
        {
            color: #d5d52c;
        }
        .documentPreviewIcon.genericIconColor {
            color: #ffffff;
        }
        .theme-light .noAccessErrorPage a, .theme-light .plannerApp>.appContent>.content a, .theme-light .plannerAppCallout a, .theme-light .plannerAppDialog a, .theme-light .sharepointApp a, .theme-light .teamsApp a, .theme-light .webpartApp a {
            color: #000000;
            text-shadow: none;
        }
        .checkbox-container>.toggleCheckLabel
        {
            color: white;
        }
        .theme-light .taskCard>.container>.membersAndLabels>.bottomBar>.assignmentControl>.label .ms-Icon--AddFriend {
            color: #000000;
        }
        .ms-Dialog-main.taskEditor-dialog-container div.taskEditor-dialog-content .assignedToUsers .assignmentControl i
        {
            color:#ffffff;
        }
        .theme-light .taskCard>.container>.contentAndLabels>.textContent>.topBar>.indicatorRow {
            color: #ffffff;
        }
        .theme-light .color-inprogress {
            color: #80ce82;
        }
        .theme-light .ms-Modal.taskEditor-dialog.plannerAppDialog .taskEditor-dialog-container {
            background-color: #000000cf;
            border-radius: 1em;
        }
        .theme-light .ms-Callout.plannerAppCallout
        {
            background-color: transparent;
            padding: 0;
        }
        .theme-light .peoplePicker>.ms-Callout-main
        {
            background-color: #212121e6;
        }
        .theme-light .peoplePicker>.ms-Callout-main>div
        {
            color : white;
        }
        [dir=ltr] .peoplePicker>.ms-Callout-main>div>.assignmentPickerTextField.ms-TextField
        {
            padding: 1em;
        }
        .theme-light .peoplePicker>.ms-Callout-main>div>.userLists>.userListSection>.userList>.user:not(.readOnly):hover .ms-Persona-primaryText
        {
            color : black;
        }
        .theme-light .peoplePicker>.ms-Callout-main>div .ms-Persona-primaryText
        {
            color: white;
        }
        .theme-light .ms-TextField.isTitleStyle>.ms-TextField-wrapper>.ms-TextField-fieldGroup>input, .theme-light .ms-TextField.isTitleStyle>.ms-TextField-wrapper>.ms-TextField-fieldGroup>textarea, .theme-light .ms-TextField.isTitleStyle>.ms-TextField-wrapper>div>input, .theme-light .ms-TextField.isTitleStyle>.ms-TextField-wrapper>div>textarea {
            color: #ffffff;
        }
        .theme-light .taskEditor>.removeMargin>.lastModifiedSection {
            color: #fcfcfc;
        }
        .theme-light .taskEditor>.removeMargin>.dropdowns>.removeMargin .dropdownTuple .ms-Label, .theme-light .taskEditor>.removeMargin>.dropdowns>.removeMargin .dropdownTuple .ms-TextField .ms-Label {
            color: #ffffff;
        }
        .theme-light .taskEditor>.removeMargin>.description>.descriptionHeader>.descriptionTitle {
            color: #ffffff;
        }
        .theme-light .taskEditor>.removeMargin>.checklist>.checklistInfo {
            color: #ffffff;
        }
        .theme-light .taskEditor>.removeMargin>.attachments>label {
            color: #ffffff;
        }
        
        .theme-light .taskEditor>.removeMargin>.attachments>.addAttachmentButtonWrapper>.addAttachmentButton,.theme-light .commentThreadView>div>.sendCommentButton {
            color: black;
        }
        .theme-light .taskEditor>.removeMargin>.attachments>.addAttachmentButtonWrapper>.addAttachmentButton:hover,.theme-light .commentThreadView>div>.sendCommentButton:hover {
            color: white;
        }
        .theme-light .taskEditor>.removeMargin>.attachments>.addAttachmentButtonWrapper>.addAttachmentButton:hover,.theme-light .commentThreadView>div>.sendCommentButton:hover
        {
            background-color: #272727;
        }
        .theme-light .commentThreadView>label {
            color: #ffffff;
        }
        .theme-light .commentCard>.body>.header>.commenterName {
            color: #ffffff;
        }
        .theme-light .commentCard>.body>.content {
            color: #ffffff;
        }
        .theme-light .commentCard>.body>.header>.timestamp {
            color: #ffffff;
        }
        .theme-light .taskEditor>.removeMargin>.assignedToUsers>.assignmentControl:not(.readOnly):hover>.label>i {
            background-color: #ffffff;
            color: black;
        }
        .theme-light .attachmentRow:hover:not(.uploading), .theme-teamslight .attachmentRow:hover:not(.uploading) {
            background-color: #ffffff00;
        }
        .theme-light .noAccessErrorPage .ms-Checkbox>.ms-Checkbox-label>.ms-Checkbox-text, .theme-light .plannerApp>.appContent>.content .ms-Checkbox>.ms-Checkbox-label>.ms-Checkbox-text, .theme-light .plannerAppCallout .ms-Checkbox>.ms-Checkbox-label>.ms-Checkbox-text, .theme-light .plannerAppDialog .ms-Checkbox>.ms-Checkbox-label>.ms-Checkbox-text, .theme-light .sharepointApp .ms-Checkbox>.ms-Checkbox-label>.ms-Checkbox-text, .theme-light .teamsApp .ms-Checkbox>.ms-Checkbox-label>.ms-Checkbox-text, .theme-light .webpartApp .ms-Checkbox>.ms-Checkbox-label>.ms-Checkbox-text {
            color: #ffffff;
        }
        .ms-Dialog-main .ms-Dialog-inner .checklist.rounded .ms-TextField.isTextStyle>.ms-TextField-wrapper>div>input {
            margin-left: 10px;
            background-color: #ffffffb3;
        }
        .ms-Dialog-main.taskEditor-dialog-container div.taskEditor-dialog-content div.checklist.rounded div.checklistWrapper input::placeholder
        {
            color:white;
        }
       .ms-Dialog-main.taskEditor-dialog-container div.taskEditor-dialog-content div.assignedToUsers span.assignLabel
        {
            color:white;
        }
        .theme-light .contentCard>.title {
            color: #ffffff;
        }
        // .calendarView .fc-view-container .fc-body .fc-day-grid .fc-day-number
        // {
        //     color: white;
        // }
        .theme-light .taskCard>.container>.contentAndLabels>.textContent>.topBar>.preview>.checklistPreview.rounded .checklistItem .ms-Checkbox .ms-Checkbox-label>span
        {
            color: #dadada;
        }
        .theme-light .taskCard.complete>.container>.contentAndLabels>.textContent>.topBar>.titleRow>.title {
            color: #c3c3c3;
        }
        .theme-light .taskCard>.container>.contentAndLabels>.textContent>.topBar>.planName {
            color: #ffffff;
        }
        .theme-light .plannerApp>.appContent>.content a span
        {
            color: #ffffff;
            text-shadow: 3px 3px 6px rgb(67 67 67);
        }
        .theme-light .taskCard>.container>.membersAndLabels>.bottomBar
        {
            background-color: #7f7f7f;
            background: linear-gradient(180deg, #727272, #7e7e7e);
        }
        .theme-light .taskCard>.container>.membersAndLabels>.bottomBar:not(.readOnly):hover 
        {
            background-color: #f3f2f1 !important;
            background: inherit;
        }
        .theme-light .taskCard>.container>.membersAndLabels>.bottomBar>.assignmentControl>.label>.ms-Persona>.ms-Persona-details>.ms-Persona-primaryText {
            color: #1f1f1f;
        }
        .checkbox-container>.toggleCheckLabel.checked {
            color: #4f6bed;
            background-image: radial-gradient(white,#4f6bed);
            border-radius: 50%;
        }
        .theme-light .taskEditor>.removeMargin>.planTitle
        {
            color: white;
        }
        .theme-light .taskEditor>.removeMargin>.title.completed>.edit input {
            color: #a7a7a7;
        }
        .taskEditor>.removeMargin>.title 
        {
            display: flex;
            flex-direction: row;
            height: 4em;
            background: #1e1e1eba;
            width: 100%;
            z-index: 10;
            position: -webkit-sticky;
            position: sticky;
            top: 0;
            padding-top: 2%;
        }
        .theme-light .taskEditorDialog_dialog.ms-Dialog>.content>.ms-Dialog-main>.ms-Dialog-header>.ms-Dialog-topButton>.ms-Button {
            color: #000000;
        }
        .taskEditorDialog_dialog.ms-Dialog>.content>.ms-Dialog-main
        {
            overflow-y: hidden;
            max-height: 95vh;
            border-radius: 1em;
            box-shadow: 19px 20px 20px 0 rgb(0 0 0 / 23%), -1px 20px 20px 0 rgb(0 0 0 / 44%)
        }
        .labelPickerArea i 
        {
            color:white;
        }
        .theme-light .labelPicker .labelPickerInner .addLabel
        {
            color: #ffffff;
        }
        .theme-light .labelPicker:hover .labelPickerInner div.addLabel 
        {
            color: black;
        }
        .taskEditorDialog_categories
        {
            margin-top: 3em;
        }
        .taskEditorDialog_dialog.ms-Dialog>.content>.ms-Dialog-main .ms-Dialog-inner>.ms-Dialog-content
        {
            height: 88vh;
            overflow: scroll;
            overflow-x: hidden;
        }
        
        .theme-light .planHubPage>.full>.welcome {
            color: #ffffff;
        }
        .appContent .sideNav .plannerLeftNav .mobileAppBanner .content, body > div > div > div.appContent > div div > div.mobileAppBanner .content
        {
            background-color: white;
        }
        .theme-light .planHubPage>.full>.header, .theme-light .planHubPage>.full>.pivotsContainer>.header {
            color: #ffffff;
        }
        .theme-light .planHubPage>.full>.header>.subHeader.selected, .theme-light .planHubPage>.full>.pivotsContainer>.header>.subHeader.selected {
            color: #21c36a;
        }
        .theme-light .planHubPage>.full>.header>.subHeader, .theme-light .planHubPage>.full>.pivotsContainer>.header>.subHeader {
            color: #ffffff;
        }
        .planCardInternal .highcharts-title,.planCardInternal .highcharts-subtitle
        {
            color: #ffffff !important;
            fill: #ffffff !important;
        }
        .theme-light .planCard>.removeMargin>.planCardInternal>.rollupElement>.rollupLegend>.rollupSeries>.name
        {
            color: #ffffff;
        }
        .planCard>.removeMargin>.planCardInternal>.cardHeader>.content>.bottomHalf>.textWrapper .fallbackContextInfoText, .planCard>.removeMargin>.planCardInternal>.cardHeader>.content>.bottomHalf>.textWrapper .planContext .ms-Breadcrumb-item {
            color: #bfbfbf;
        }
        .theme-light .planCard
        {
            background-color: #2f2f2f94;
        }
        .theme-light .planCard>.removeMargin>.planCardInternal>.cardHeader>.content>.topHalf>.textWrapper>.tileName {
            color: #ffffff;
        }
        .theme-light .planCard>.removeMargin>.planCardInternal>.cardHeader>.content>.topHalf>.contextMenuSection {
            color: #ffffff;
        }
        .planCard>.removeMargin>.planCardInternal>.cardHeader>.content>.topHalf>.starWrapperSection>button {
            color: black;
        }
        .theme-light .planCard>.removeMargin>.planCardInternal>.cardHeader>.content>.topHalf>.starWrapperSection {
            color: #ffffff;
        }
        .planCard>.removeMargin>.planCardInternal
        {
            box-shadow: 5px 3px 20px 0px rgba(255, 255, 255, 0.18), 3px 6px 6px 0 rgba(255, 255, 255, 0.11);
        }
        .planHubPage>.full>.mobileAppBanner
        {
            box-shadow: 6px 3px 20px 0 rgba(255, 255, 255, 0.18), 18px 20px 20px 0 rgba(255, 255, 255, 0.11);
        }
        .documentPreviewIcon.genericIconColor {
            color: #000000;
        }
        .theme-light .checklistWrapper>ul>li>div>.checklistItemTitle {
            color: #b6b6b6;
        }
        .theme-light .checklistWrapper>ul>li>div>.checklistItemTitle:hover
        {
            color: #424242;
        }  
        .o365cs-base .o365sx-activeButton {
            color: #ffffff;
            background-color: #131212;
        }
        .o365cs-base .o365sx-neutral-lighterAlt-background, .o365cs-base .o365sx-neutral-lighterAlt-hover-background:hover {
            background-color: #383838;
        }
        .o365cs-base .o365sx-neutral-dark-font, .o365cs-base .o365sx-neutral-dark-hover-font:hover {
            color: #ffffff;
        }
        .o365cs-base .o365sx-neutral-foreground-background, .o365cs-base .o365sx-neutral-foreground-hover-background:hover {
            background-color: #4c4c4c;
        }
        .o365cs-base .o365sx-neutral-accent-link, .o365cs-base .o365sx-neutral-accent-link:hover, .o365cs-base .o365sx-neutral-accent-link:visited, .o365cs-base .o365sx-neutral-accent-hover-link:hover {
            color: #42a8ff;
        }
        .o365cs-base .o365sx-neutral-lightAlt-border, .o365cs-base .o365sx-neutral-lightAlt-hover-border:hover {
            border-color: #383838;
        }
        .o365cs-base .o365sx-neutral-accent-font, .o365cs-base .o365sx-neutral-accent-hover-font:hover {
            color: #4aacff;
        }
        .theme-light .contentCard>.title {
            background-color: #424242;
        }
        .theme-light .noAccessErrorPage ::-webkit-scrollbar-thumb, .theme-light .plannerApp ::-webkit-scrollbar-thumb, .theme-light .plannerAppCallout ::-webkit-scrollbar-thumb, .theme-light .plannerAppDialog ::-webkit-scrollbar-thumb, .theme-light .sharepointApp ::-webkit-scrollbar-thumb, .theme-light .teamsApp ::-webkit-scrollbar-thumb, .theme-light .webpartApp ::-webkit-scrollbar-thumb {
            background-color: #ffffffa6;
        }
        .theme-light .taskCard>.container:hover
        {
            transform: scale(1.02);
        }
        </style>`);
