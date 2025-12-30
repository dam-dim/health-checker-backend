import { insertTarget, selectAllTargets } from "../db/target.repository.js";

export const createTarget = async (data) => {
    // TODO: validate the data
    return await insertTarget(data);
};

export const getAllTargets = async () => {
    return await selectAllTargets();
}