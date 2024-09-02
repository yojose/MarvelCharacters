import { renderHook, act, waitFor } from '@testing-library/react'
import useApi from '../../hooks/useApi/useApi'
import { testDataCharactaersList } from '../../api/testData'
import { baseUrl, charactersLimit } from '../../configs/config'
import axios from 'axios'

const defaultConfig = {
    method: 'get',
    baseURL: baseUrl,
    params: {
        limit: charactersLimit,
    },
}

jest.mock('axios', () => ({
    ...jest.requireActual('axios'),
    get: jest.fn(),
}))
const mockAxios = axios.get as jest.Mock

describe('useAoi', () => {
    test('usApi get data ', async () => {
        // const mock = new MockAdapter(axios);
        // mock.onGet('/characters').reply(200, { testDataCharactaersList });
        testDataCharactaersList.code = 23232300454545

        await act(
            mockAxios.mockResolvedValue({ data: { testDataCharactaersList } })
        )

        const { result } = renderHook(() =>
            useApi('/characters', defaultConfig)
        )

        await waitFor(() => expect(result.current.isloading).toBeTruthy())

        //await waitFor(() => expect(result.current.data).toEqual(expect.objectContaining({count: 0,results: []})),{ timeout: 2500 });

        console.log(result)
    })
})
