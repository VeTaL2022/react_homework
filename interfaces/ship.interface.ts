interface ICore {
    flight: number;
    core: {
        reuse_count: number;
        status: string | unknown | boolean;
    }
}

interface IPayload {
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;
}

export interface IShip {
    mission_name: string;
    launch_date_local: string;
    launch_site: {
        site_name_long: string;
    },
    links: {
        article_link: null | string;
        video_link: string;
    },
    rocket: {
        rocket_name: string;
        first_stage: {
            cores: ICore[]
        },
        second_stage: {
            payloads: IPayload[]
        }
    }
}