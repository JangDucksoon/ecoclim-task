'useClient';

import { EcoclimInputWithSelect } from '@/components/common/input';
import React, { useState } from 'react';
import { CircleX } from 'lucide-react';
import { TASK_ECOCLIM_MAIN } from '../../../lib/env';

const interSearchUrl = `${TASK_ECOCLIM_MAIN}/sch/intergratedTskSearchVw.do`;

export default function HeaderSearch({ open, setOpen }: { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [searchOption, setSearchOption] = useState({ hdSearchTab: 'ECP', hdSearchKeyword: '' });

    function setSearchOptionState(name: string, value: string) {
        setSearchOption((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSearchEnter(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleInterSearch();
        }
    }

    function handleInterSearch() {
        if (!searchOption.hdSearchKeyword) {
            alert('검색어를 입력해주세요.');
            return;
        }

        const form = document.createElement('form');
        form.method = 'POST';
        form.action = interSearchUrl;
        form.style.display = 'none';
        document.body.appendChild(form);

        for (const key in searchOption) {
            if (Object.prototype.hasOwnProperty.call(searchOption, key)) {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = searchOption[key as keyof typeof searchOption];
                form.appendChild(input);
            }
        }

        form.submit();
    }

    return (
        open && (
            <>
                <div className="z-99 fixed inset-0 top-[85px] bg-black/50" onClick={() => setOpen(false)} role="presentation" aria-hidden="true" />
                <div className="absolute left-0 top-0 w-screen transition-opacity duration-200">
                    <div className="z-100 bg-(--color-background-secondary-subtler) fixed left-0 right-0 top-[85px] block shadow-md">
                        <div className="gap-(--padding-07) p-(--padding-07) bg-(--color-background-secondary-subtler) w-(--main-wrap) relative mx-auto my-0 min-h-0">
                            <div>
                                <button
                                    className="text-(length:--font-size-body-small) right-(--icon-size-medium) absolute inline-block cursor-pointer"
                                    onClick={() => setOpen(false)}
                                >
                                    <CircleX className="w-(--icon-size-medium) h-(--icon-size-medium)" />
                                </button>
                                <h2 className="text-(length:--font-size-heading-medium) mx-0 my-0 text-center font-bold">통합검색</h2>
                            </div>
                            <EcoclimInputWithSelect
                                className="mt-(--icon-size-medium) mx-auto mb-0"
                                selectProps={{
                                    emptyOption: false,
                                    data: selectOptions,
                                    value: searchOption.hdSearchTab,
                                    setValue: (value) => setSearchOptionState('hdSearchTab', value)
                                }}
                                inputProps={{
                                    type: 'text',
                                    value: searchOption.hdSearchKeyword,
                                    setValue: (value) => setSearchOptionState('hdSearchKeyword', value),
                                    placeholder: '검색어를 입력해주세요.',
                                    search: true,
                                    onClickSearch: handleInterSearch,
                                    onKeyDown: handleSearchEnter
                                }}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    );
}

const selectOptions = [
    { name: '전체', value: 'ECP' },
    { name: '생물종', value: 'NIE_KTSN' },
    { name: '공지사항', value: 'NIE_NOTICE' },
    { name: '연구콘텐츠', value: 'NIE_CONTS' }
];
