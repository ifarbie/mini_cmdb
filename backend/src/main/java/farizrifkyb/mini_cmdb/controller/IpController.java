package farizrifkyb.mini_cmdb.controller;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import farizrifkyb.mini_cmdb.entity.Ip;
import farizrifkyb.mini_cmdb.model.request.IpRequest;
import farizrifkyb.mini_cmdb.model.response.IpDetailResponse;
import farizrifkyb.mini_cmdb.model.response.IpResponse;
import farizrifkyb.mini_cmdb.model.response.WebResponse;
import farizrifkyb.mini_cmdb.service.IpService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class IpController {

    private final IpService ipService;

    @PostMapping(path = "/api/ips", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public WebResponse<IpResponse> createIp(@RequestBody @Valid IpRequest req) {
        return WebResponse.<IpResponse>builder().data(ipService.createIp(req)).build();
    }

    @GetMapping(path = "/api/ips", produces = MediaType.APPLICATION_JSON_VALUE)
    public WebResponse<List<IpDetailResponse>> getAllIps() {
        List<IpDetailResponse> listIps = ipService.getAllIps();
        return WebResponse.<List<IpDetailResponse>>builder().data(listIps).build();
    }

    @GetMapping(path = "/api/ips/{ipId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public WebResponse<Ip> getIpById(@PathVariable("ipId") Long IpId) {
        Ip ip = ipService.getIpById(IpId);
        return WebResponse.<Ip>builder().data(ip).build();
    }

    @PutMapping(path = "/api/ips/{ipId}", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public WebResponse<Ip> updateIp(@PathVariable("ipId") Long IpId,
            @RequestBody @Valid IpRequest req) {
        return WebResponse.<Ip>builder().data(ipService.updateIp(IpId, req)).build();
    }

    @DeleteMapping(path = "/api/ips/{ipId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public WebResponse<String> deleteIp(@PathVariable("ipId") Long ipId) {
        String response = ipService.deleteIp(ipId);
        return WebResponse.<String>builder().data(response).build();
    }
}
