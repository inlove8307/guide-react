import React from "react";
// LAYOUT
import UxLayout from "components/layout/UxLayout";
import UxSection from "components/layout/UxSection";
import UxArticle from "components/layout/UxArticle";
import UxTitle from "components/layout/UxTitle";
import UxContent from "components/layout/UxContent";
import UxDock from "components/layout/UxDock";
// BASE
import UxBadge from "components/base/UxBadge";
import UxButton from "components/base/UxButton";
import UxCheckbox from "components/base/UxCheckbox";
import UxChip from "components/base/UxChip";
import UxDivider from "components/base/UxDivider";
import UxFile from "components/base/UxFile";
import UxImage from "components/base/UxImage";
import UxInput from "components/base/UxInput";
import UxLink from "components/base/UxLink";
import UxPassword from "components/base/UxPassword";
import UxRadio from "components/base/UxRadio";
import UxRange from "components/base/UxRange";
import UxSelect from "components/base/UxSelect";
import UxSwitch from "components/base/UxSwitch";
import UxText from "components/base/UxText";
import UxTextarea from "components/base/UxTextarea";
// MIXIN
import UxAlert from "components/mixin/UxAlert";
import UxBreadcrumb from "components/mixin/UxBreadcrumb";
import UxCalendar from "components/mixin/UxCalendar";
import UxCard from "components/mixin/UxCard";
import UxCollapse from "components/mixin/UxCollapse";
import UxConfirm from "components/mixin/UxConfirm";
import UxDatepicker from "components/mixin/UxDatepicker";
import UxDropdown from "components/mixin/UxDropdown";
import UxField from "components/mixin/UxField";
import UxFilter from "components/mixin/UxFilter";
import UxForm from "components/mixin/UxForm";
import UxGroup from "components/mixin/UxGroup";
import UxInfo from "components/mixin/UxInfo";
import UxKeypad from "components/mixin/UxKeypad";
import UxList from "components/mixin/UxList";
import UxMasking from "components/mixin/UxMasking";
import UxModal from "components/mixin/UxModal";
import UxPagination from "components/mixin/UxPagination";
import UxPopover from "components/mixin/UxPopover";
import UxProgress from "components/mixin/UxProgress";
import UxSwiper from "components/mixin/UxSwiper";
import UxTab from "components/mixin/UxTab";
import UxTable from "components/mixin/UxTable";
import UxTimeline from "components/mixin/UxTimeline";
import UxToast from "components/mixin/UxToast";
import UxToggle from "components/mixin/UxToggle";
import UxTooltip from "components/mixin/UxTooltip";

export default () => {
	return (
		<UxLayout>
			<UxSection>
				<UxArticle>
					<UxTitle>
						<h3>Sample</h3>
					</UxTitle>
					<UxContent>

						{/* BASE */}
						<UxBadge>UxBadge</UxBadge>
						<UxButton>UxButton</UxButton>
						<UxCheckbox>UxCheckbox</UxCheckbox>
						<UxChip>UxChip</UxChip>
						<UxDivider>UxDivider</UxDivider>
						<UxFile>UxFile</UxFile>
						<UxImage>UxImage</UxImage>
						<UxInput>UxInput</UxInput>
						<UxLink>UxLink</UxLink>
						<UxPassword>UxPassword</UxPassword>
						<UxRadio>UxRadio</UxRadio>
						<UxRange>UxRange</UxRange>
						<UxSelect>UxSelect</UxSelect>
						<UxSwitch>UxSwitch</UxSwitch>
						<UxText>UxText</UxText>
						<UxTextarea>UxTextarea</UxTextarea>

						{/* MIXIN */}
						<UxAlert>UxAlert</UxAlert>
						<UxBreadcrumb>UxBreadcrumb</UxBreadcrumb>
						<UxCalendar>UxCalendar</UxCalendar>
						<UxCard>UxCard</UxCard>
						<UxCollapse>UxCollapse</UxCollapse>
						<UxConfirm>UxConfirm</UxConfirm>
						<UxDatepicker>UxDatepicker</UxDatepicker>
						<UxDropdown>UxDropdown</UxDropdown>
						<UxField>UxField</UxField>
						<UxFilter>UxFilter</UxFilter>
						<UxForm>UxForm</UxForm>
						<UxGroup>UxGroup</UxGroup>
						<UxInfo>UxInfo</UxInfo>
						<UxKeypad>UxKeypad</UxKeypad>
						<UxList>UxList</UxList>
						<UxMasking>UxMasking</UxMasking>
						<UxModal>UxModal</UxModal>
						<UxPagination>UxPagination</UxPagination>
						<UxPopover>UxPopover</UxPopover>
						<UxProgress>UxProgress</UxProgress>
						<UxSwiper>UxSwiper</UxSwiper>
						<UxTab>UxTab</UxTab>
						<UxTable>UxTable</UxTable>
						<UxTimeline>UxTimeline</UxTimeline>
						<UxToast>UxToast</UxToast>
						<UxToggle>UxToggle</UxToggle>
						<UxTooltip>UxTooltip</UxTooltip>

					</UxContent>
				</UxArticle>
			</UxSection>
			<UxDock>
				Dock
			</UxDock>
		</UxLayout>
	);
};