export type InitialFormType = {
    email: string;
    password?: string;
};

export interface FormTypes {
    ButtonName: string;
    handleClick: (credentials: InitialFormType) => void;
    initial: InitialFormType;
    headName: string;
    showAdditionalButton?: boolean;
    showPasswordButton?: boolean;
    buttonBehind?: boolean;
}
