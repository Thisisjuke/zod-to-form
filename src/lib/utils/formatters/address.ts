// eslint-disable-next-line unused-imports/no-unused-vars
export function addressToTextFormatter({ address1, address2, zipcode, universityZipCode, city, countryCode, state }: any) {
    let formattedAddress = ''

    if (address1) {
        formattedAddress += address1
    }

    if (address2) {
        formattedAddress += `, ${address2}`
    }

    if (city) {
        formattedAddress += `, ${city}`
    }

    /*
    if (state) {
        formattedAddress += `, ${state}`
    }

    if (zipcode || universityZipCode) {
        formattedAddress += `, ${zipcode || universityZipCode}`
    }

    if (countryCode) {
        formattedAddress += `, ${countryCode}`
    }
    */

    return formattedAddress.trim()
}
