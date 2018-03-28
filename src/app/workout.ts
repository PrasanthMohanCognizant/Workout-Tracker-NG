export interface IWorkout{
    id: number,
    title: string,
    note: string,
    calories_burnt: number,
    category_id: number,
    start_date: Date,
    start_time: Date,
    end_date: Date,
    end_time: Date,
    comment: string,
    status: boolean
}