import { ScType } from 'ts-sc-client';
import { ScConstruction, ScLinkContent, ScLinkContentType, ScEventSubscriptionParams } from "ts-sc-client";
import { client } from '../client';

const user = "user";
const nrel_main_idtf = "nrel_main_idtf";

const keynodes = [
    { id: user, type: ScType.ConstNodeClass },
    { id: nrel_main_idtf, type: ScType.ConstNodeNonRole },
];

export const createUserAgent = async (userName) => {
    console.log(userName);
    let keys = await client.resolveKeynodes(keynodes);

    const nameAlias = "_name";
    const nameNodeAlias = "_nameNode";
    const arcNameAlias = "_arcName";

    const construction = new ScConstruction();
    construction.generateNode(ScType.ConstNode, nameNodeAlias);
    construction.generateLink(ScType.ConstNodeLink, new ScLinkContent(userName, ScLinkContentType.String), nameAlias);
    construction.generateConnector(ScType.ConstCommonArc, nameNodeAlias, nameAlias, arcNameAlias);
    construction.generateConnector(ScType.ConstPermPosArc, keys[nrel_main_idtf], arcNameAlias);
    construction.generateConnector(ScType.ConstPermPosArc, keys[user], nameNodeAlias);

    await client.generateElements(construction);
    return true;
};
