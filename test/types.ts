export interface Record {
    participantId: number;
    participantName: string;
    participantDepartment: string;
    penalty: number;
    solved: number;
    submissions: {
        problemId: number;
        tries: number;
        time: number;
        status: 'Accepted' | 'Rejected';
    }[];
};

export interface Res {
    problemCount: number;
    records: Record[];
};
