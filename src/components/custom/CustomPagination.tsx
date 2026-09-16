// import React from 'react'
import {Button} from "@/components/ui/button.tsx";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {useSearchParams} from "react-router";

interface Props {
    totalPages: number;
    // limit?: number;
    // currentPage: number;
    // onPageChange: (page: number) => void;
}

export const CustomPagination = ({ totalPages }: Props) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const queryPage = searchParams.get("page") ?? '1';
    const page = isNaN(Number(queryPage)) ? 1 : Number(queryPage);

    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || newPage > totalPages) return;
        searchParams.set('page', newPage.toString())
        setSearchParams(searchParams);
    }

    return (
        <div>
            <div className="flex items-center justify-center space-x-2">
                <Button variant="outline" size="sm" disabled={page === 1} onClick={() => {
                    handlePageChange(page - 1)
                }}>
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                </Button>

                {
                    Array.from({ length: totalPages }, (_, index) => (
                        <Button
                            key={index}
                            variant={page === index + 1 ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => {
                                handlePageChange(index + 1)
                            }}
                        >
                            { index + 1}
                        </Button>
                    ))
                }

                <Button
                    variant="outline"
                    size="sm"
                    disabled={page === totalPages}
                    onClick={() => {
                        handlePageChange(page + 1)
                        setSearchParams(searchParams);
                    }}
                >
                    Next
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}
