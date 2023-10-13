import type {Meta, StoryObj} from '@storybook/react';
import React, {PropsWithChildren} from "react";
import BusinessCardSubmitEmail, {SubmitEmailIProps} from "../../components/transform-hw/pages/BusinessCardSubmitEmail";


const meta: Meta<typeof BusinessCardSubmitEmail> = {
    title: "Resume/Page Components/Submit Email",
    component: BusinessCardSubmitEmail,
};

export default meta;
type Story = StoryObj<typeof BusinessCardSubmitEmail>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const BusinessCardSubmitEmailStory: Story = {
    args: {
        emailButtonText: 'Submit',
        emailFieldText: "Your Email Address.",
        subscribeText: "Want a copy of my resume emailed to you?"
    },
    render: ({emailFieldText, emailButtonText, subscribeText}: PropsWithChildren<SubmitEmailIProps>) =>
        <BusinessCardSubmitEmail emailFieldText={emailFieldText}
                                 emailButtonText={emailButtonText}
                                 subscribeText={subscribeText}/>,
};